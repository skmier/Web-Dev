import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/Product';
import { ProductItemComponent } from '../../components/product-item/product-item';
import { ProductService } from '../../services/product';
import { Category } from '../../model/Category';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent, ],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  @Input() products: Product[] = [];

  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}