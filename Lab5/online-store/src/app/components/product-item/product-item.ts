import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/Product';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();
  currentImageIndex: number = 0;
  nextImage() {
  if (this.currentImageIndex < this.product.images.length - 1) {
    this.currentImageIndex++;
  }
}

currentImage: string = '';

ngOnInit() {
  this.currentImage = this.product.images[0];
}

setImage(img: string) {
  this.currentImage = img;
}
prevImage() {
  if (this.currentImageIndex > 0) {
    this.currentImageIndex--;
  }
}


  like() {
    this.product.likes++;
  }

  deleteProduct() {
    if (confirm('Are you sure?')) {
      this.delete.emit(this.product.id);
    }
  }

  shareToWhatsApp() {
    const text = encodeURIComponent(`Посмотри товар: ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareToTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}