import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../core/models/product.model';
import {Router} from '@angular/router';
import {CartService} from '../../core/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{

  @Input() product: Product;

  inCart = false;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.inCart = this.cartService.itemInCart(this.product.product_id);
  }

  productDetail(id: string) {
    this.router.navigate(['/product', id]);
  }

  addToCart(product: Product) {

    if (!product) {
      return;
    }

    product.quantity = 1;
    product.total = product.price;

    this.cartService.addToCart(product);
    this.inCart = this.cartService.itemInCart(this.product.product_id);
  }
}
