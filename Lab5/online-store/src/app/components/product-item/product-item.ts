import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
@Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  deleteProduct() {
    if (confirm('Are you sure?')) {
      this.delete.emit(this.product.id);
    }
  }
}
