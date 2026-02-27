import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product';
import { Category } from './model/Category';
import { Product } from './model/Product';
import { ProductListComponent } from './components/product-list/product-list';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, FormsModule],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  products: Product[] = [];
  searchText: string = '';

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
      this.showAll(); 
  }

  selectCategory(id: number) {
  this.selectedCategoryId = id;
  this.applyFilters();
}

  showAll() {
  this.selectedCategoryId = null;
  this.applyFilters();
}

applyFilters() {
  let allProducts = this.selectedCategoryId
    ? this.productService.getProductsByCategory(this.selectedCategoryId)
    : this.productService.getAllProducts();

  this.products = allProducts.filter(p =>
    p.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
}
  
}