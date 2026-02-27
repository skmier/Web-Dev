import { Component, Input } from '@angular/core';
import { Product } from '../../model/Product';
import { ProductItem } from "../product-item/product-item";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  imports: [ProductItem]
})
export class ProductListComponent {

  @Input() products: Product[] = [];

  removeProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}