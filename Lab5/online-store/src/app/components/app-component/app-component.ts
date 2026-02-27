import { Component } from '@angular/core';
import { Category } from '../../model/Category';
import { Product } from '../../model/Product';
import { ProductService } from '../../services/product';
import { ProductListComponent } from "../product-list/product-list";

@Component({
  selector: 'app-root',
  templateUrl: './app-component.html',
  styleUrl: './app-component.css',
  imports: [ProductListComponent]
})
export class AppComponent {

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  products: Product[] = [];
filteredProducts: any;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.products = this.productService.getProductsByCategory(categoryId);
  }
}