import { Injectable } from '@angular/core';
import {Observable, throwError} from 'rxjs';
import { ProductDetail } from 'src/app/core/models/product-detail.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorHandlerService } from 'src/app/core/http/http-error-handler.service';
import {catchError, finalize, tap} from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Category } from 'src/app/core/models/category.model';
import { error } from '@angular/compiler/src/util';
import { AngularFireStorage, AngularFireUploadTask, AngularFireStorageReference } from '@angular/fire/storage';
import { async } from '@angular/core/testing';


@Injectable()
export class AdminProductService {
  BASE_URL = environment.BASE_URL;
  PRODUCT_API = 'get_all_products';
  CATEGORY_API = 'category/category_list';
  PRODUCT_ADD_API = 'product/add_product';
  PRODUCT_UPDATE_API = 'product/update';

  products : ProductDetail[];
  private uploadPercent: Observable<number>;
  private downloadURL : Observable<string>;


  constructor( private http: HttpClient,
    private httpErrorHandlerService: HttpErrorHandlerService,
    private authservice: AuthService,
    private storage: AngularFireStorage
               ){}

  getProductList(): Observable<Array<ProductDetail>> {

    const url = `${this.BASE_URL}${this.PRODUCT_API}`;
    return this.http.get<Array<ProductDetail>>(url,{
      headers: new HttpHeaders().set('Authorization',`Bearer ${this.authservice.userSubject.value.token}`)
    }).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  getCategoryList(){
    const url = `${this.BASE_URL}${this.CATEGORY_API}`;
    return this.http.get<Array<Category>>(url).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  getProduct(id: string){

    const product = this.products.find(product => product._id===id );
    return product? product : error('No product found');
  }

  /*addProduct(value: any){
    const image = value.image;
    delete value.image;
    const data = JSON.stringify(value);
    const form = new FormData();
    form.append('data',data);
    form.append('image',image,'image');
    const url = `${this.BASE_URL}${this.PRODUCT_ADD_API}`;
    return this.http.post<ProductDetail>(url,form,
      {
        headers: new HttpHeaders().set('Authorization',`Bearer ${this.authservice.userSubject.value.token}`)
      }
      ).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }*/

  addProduct(value: any){
    const url = `${this.BASE_URL}${this.PRODUCT_ADD_API}`;
    return this.http.post<ProductDetail>(url,value,
      {
        headers: new HttpHeaders().set('Authorization',`Bearer ${this.authservice.userSubject.value.token}`)
      }
      ).pipe(catchError(this.httpErrorHandlerService.handleErr));
  }

  updateProduct(id: string, value: any) {
    const imageType = typeof value.image;
    const url = `${this.BASE_URL}${this.PRODUCT_UPDATE_API}/${id}`;

    if(imageType !== "undefined" && imageType === "object"){
        const image = value.image;
        delete value.image;
        const data = JSON.stringify(value);
        const form = new FormData();
        form.append('data',data);
        form.append('image',image,'image');

      return this.http.patch<ProductDetail>(url, form,
        {
          headers: new HttpHeaders().set('Authorization',`Bearer ${this.authservice.userSubject.value.token}`)
        }
      ).pipe(catchError(this.httpErrorHandlerService.handleErr));
    }
    else return this.http.patch<ProductDetail>(url, {...value},
        {
          headers: new HttpHeaders().set('Authorization',`Bearer ${this.authservice.userSubject.value.token}`)
        }
      ).pipe(catchError(this.httpErrorHandlerService.handleErr));


  }

   uploadFile(file: File)  {
    return new Promise<string>( (resolve,reject) => {
      const id = `${Math.random().toString(36).substring(2)}_${Date.now()}`;
      const ref: AngularFireStorageReference = this.storage.ref('product_images').child(id);
      const task: AngularFireUploadTask = ref.put(file)

      task.snapshotChanges().pipe(
        finalize( async() => {
          const downloadURL = await ref.getDownloadURL().toPromise();
          console.log(downloadURL)
          resolve(downloadURL)
        }),
        catchError(_ => reject)
      ).subscribe();

    } )

  }




}
