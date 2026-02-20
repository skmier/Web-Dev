import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList], 
  template: `
    <h1 style="text-align: center;">Kaspi Shop</h1>
    <app-product-list></app-product-list>
  `
  
})
export class AppComponent {
  
}