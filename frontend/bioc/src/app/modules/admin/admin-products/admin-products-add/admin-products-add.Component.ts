import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AdminProductService } from '../admin-product.service';
import { Category } from 'src/app/core/models/category.model';
import { ProductDetail } from 'src/app/core/models/product-detail.model';
import {ActivatedRoute, Router} from '@angular/router';
import { mimeType } from './mime-type.validator';

@Component({
  selector: 'app-admin-products-add',
  templateUrl: './admin-products-add.component.html',
  styleUrls: ['./admin-products-add.component.scss']
})
export class AdminProductsAddComponent implements OnInit,OnDestroy {

  constructor(private productService: AdminProductService, private route: ActivatedRoute, private router: Router) { }

  isLoading = false;
  isFileSelected = false;
  productForm : FormGroup;
  categorySubs : Subscription;
  categories: Category[];
  imagePreview:string;
  editMode = false;
  id: string;
  product: ProductDetail;
  errorMessage = ''


  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
    if(!!this.id) this.editMode = true;

    this.categorySubs = this.productService.getCategoryList().subscribe(categories => this.categories=categories);
    let productName = '';
    let category = '';
    let description = '';
    let discount = 0;
    let price = 0;
    let inStock = true;
    let isRecent = true;
    let ingredients = new FormArray([]);
    let tags = new FormArray([]);

    if(this.editMode) {

      this.product = this.productService.getProduct(this.id);

      productName = this.product.product_name;
      category = this.product.category;
      description = this.product.description;
      discount = this.product.discount_percentage;
      price = this.product.price;
      this.imagePreview = this.product.images[0];
      inStock = this.product.in_stock;
      isRecent = this.product.is_recent;
      this.product.ingredients.forEach( ingredient =>
        ingredients.push(new FormControl(ingredient,Validators.required))
      );
      this.product.tags.forEach( tag =>
        tags.push(new FormControl(tag,Validators.required))
      );

    }

    this.productForm = new FormGroup({
      product_name: new FormControl(productName,[Validators.required]),
      category: new FormControl(category,[Validators.required]),
      description: new FormControl(description,[Validators.required]),
      discount_percentage: new FormControl(discount,[Validators.required,Validators.maxLength(2)]),
      price: new FormControl(price,[Validators.required]),
      image: new FormControl(this.imagePreview, {validators: [Validators.required], asyncValidators: [mimeType]}),
      in_stock: new FormControl(inStock),
      is_recent: new FormControl(isRecent),
      ingredients: ingredients,
      tags: tags
    });
    if(this.editMode) this.productForm.get('category').disable();
  }

  async onSubmit(){

    if(this.productForm.valid && this.productForm.dirty) {
      this.isLoading = true;
      if(!this.editMode) {
        const value = this.productForm.value;
        const imageURL = await this.productService.uploadFile(value.image);
        delete value.image;
        value.images = [imageURL];
        this.productService.addProduct(value).subscribe( product => this.onCancel());
      }else {
        const value = this.getDirtyValues();
        // @ts-ignore
        if(value.image) {
          // @ts-ignore
          const imageURL = await this.productService.uploadFile(value.image);
          // @ts-ignore
          delete value.image;
          // @ts-ignore
          value.images = [imageURL];
        }
        this.productService.updateProduct(this.id,value).subscribe(product => this.onCancel());
      }
    } else this.errorMessage = 'The form is might not be valid or no changes made'

  }

  private onCancel(){
    this.isLoading = false;
    this.router.navigate(['../'],{relativeTo:this.route});
  }


  getDirtyValues(){
    let dirtyValues= {};
    for (let controlsKey in this.productForm.controls) {
        let control = this.productForm.controls[controlsKey];
        if(control.dirty) dirtyValues[controlsKey] = control.value;
    }
    return dirtyValues;
  }

  onImagePicked(event: Event){

    const file = (event.target as HTMLInputElement).files[0];
    this.productForm.patchValue({ image:file });
    this.productForm.get('image').updateValueAndValidity();
    this.productForm.get('image').markAsDirty();
    const reader = new FileReader();
    reader.onload = _ => this.imagePreview = reader.result as string
    reader.readAsDataURL(file)

  }

  ngOnDestroy(): void {
      this.categorySubs.unsubscribe()
  }

  get ingredientControls() { // a getter!
    return (this.productForm.get('ingredients') as FormArray).controls;
  }

  get tagsControls() { // a getter!
    return (this.productForm.get('tags') as FormArray).controls;

  }

  onAddIngredient(){
    (<FormArray>this.productForm.get('ingredients')).push(new FormControl('', Validators.required));
  }

  onAddTag() {
    (<FormArray> this.productForm.get('tags')).push(new FormControl('',Validators.required))
  }

  onDeleteIngredient(index: number){
    (<FormArray>this.productForm.get('ingredients')).removeAt(index)
  }

  onDeleteTag(index: number){
    (<FormArray>this.productForm.get('tags')).removeAt(index)
  }


  deleteProduct() {
    if(confirm("Are you sure you want to delete this product "+this.product.product_name)) {
      this.isLoading = true;
      this.productService.deleteProduct(this.id).subscribe( deleted => {
          if(deleted)  this.onCancel();
      })
    }
  }
}
