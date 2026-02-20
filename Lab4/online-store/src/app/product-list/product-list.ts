import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
    selectedImages: { [key: number]: string } = {};
    products : Product[]=[ 
      {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb ',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность ',
      price: 782500 ,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    }, 

    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S25 5G 12 ГБ/256 ГБ  ',
      description: 'Samsung Galaxy S25 5G — флагманский смартфон с передовыми технологиями, мощным процессором Snapdragon 8 Elite и потрясающей камерой 50 Мп. ',
      price: 439800 ,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p56/p03/20107707.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p56/p03/20107707.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/p00/20107711.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1d/p03/20107709.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-5g-12-gb-256-gb-sinii-133432433/?c=750000000'
    }, 

    {
      id: 3,
      name: 'Смартфон Realme Note 70 6 ГБ/128 ГБ ',
      description: 'Realme Note 70 — это стильный и функциональный смартфон с большим экраном и ёмким аккумулятором 6300 мА·ч, который станет вашим надёжным помощником в повседневных задачах ',
      price: 72990 ,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p75/p7a/64499489.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p75/p7a/64499489.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb5/p77/64499493.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p2c/64499502.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/realme-note-70-6-gb-128-gb-zolotistyi-145564514/?c=750000000'
    },
    {
      id: 4,
      name: 'Смартфон OPPO A78 8 ГБ/256 ГБ',
      description: 'Смартфон имеет экран AMOLED с разрешением FHD+, на который выводятся детализированные изображения с естественной цветопередачей. Интеллектуальная адаптивная подсветка позволяет с комфортом смотреть видеоконтент, мультимедийные материалы без напряжения зрения при разных условиях. ',
      price: 138990 ,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc0/h02/83108938809374.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0a/p46/19319585.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p46/19319587.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5f/p46/19319588.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/oppo-a78-8-gb-256-gb-chernyi-112808573/?c=750000000'
    },

    {
      id: 5,
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123',
      description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.',
      price: 525789 ,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/pc3/35723927.jpg?format=gallery-medium'
      ],
      link: 'kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000'
    },
    

    {
      id: 7,
      name: 'Ноутбук Lenovo IdeaPad 3 15.6" / 8 Гб / SSD 256 Гб / DOS / 15IGL05 / 81WQ00ERRK',
      description: 'Ноутбук IdeaPad 3 работает тише и с меньшим выделением тепла за счет использования оптимизированной механической системы распределения потоков воздуха и интеллектуальной вентиляции, предотвращающей смешивание потоков холодного и теплого воздуха.',
      price: 159990 ,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/hba/64231854538782.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h2f/h20/64231858077726.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/64231934689310.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15-6-8-gb-ssd-256-gb-dos-15igl05-81wq00errk-102715483/?c=750000000'
    },

    {
      id: 8,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб ',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений! Этот мощный планшет с 11-дюймовым экраном и высоким разрешением обеспечит вам яркие и чёткие изображения, а производительный процессор Apple A16 гарантирует быструю работу приложений.',
      price: 202430 ,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000'
    },

    {
      id: 9,
      name: `Смартфон Apple iPhone 13 128Gb черный`,
      description: `Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.`,
      price: 305795,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
        ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
    },

    {
      id: 10,
      name: `Наушники Apple EarPods USB-C белый`,
      description: 'Наушники Apple USB-C MYQY3ZM/A — это удобное и практичное решение для тех, кто предпочитает классический дизайн и надёжное качество звука. ✨',
      price: 49000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/p27/108964604.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h55/hd8/84353546846238.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h49/ha9/84353546911774.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h93/84353546977310.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-usb-c-belyi-114086432/?c=750000000',
    },
  ];

  ngOnInit() {
    this.products.forEach(p => {
      this.selectedImages[p.id] = p.image;
    });
  }

  changeImage(productId: number, imageUrl: string) {
    this.selectedImages[productId] = imageUrl;
  }

  getStars(rating: number) {
    return Array(5).fill(0).map((_, i) => i < rating);
  }

  shareToWhatsApp(link: string) {
    const text = encodeURIComponent(`Посмотри этот товар: ${link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareToTelegram(link: string, name: string) {
    const url = encodeURIComponent(link);
    const text = encodeURIComponent(`Посмотри этот товар: ${name}`);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
