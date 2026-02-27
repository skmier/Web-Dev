import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' },
  ];

  products : Product[]=[ 
      {
      categoryId: 1,
      likes: 0,
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
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
    }, 

    {
      categoryId: 1,
      likes: 0,
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
      categoryId: 1,
      likes: 0,
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
      categoryId: 1,
      likes: 0,
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
      categoryId: 2,
      likes: 0,
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
      categoryId: 2,
      likes: 0,
      id: 6,
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
      categoryId: 3,
      likes: 0,
      id: 7,
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
      categoryId: 1,
      likes: 0,
      id: 8,
      name: "Смартфон Apple iPhone 13 128Gb черный",
      description: "Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.",
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
      categoryId: 4,
      likes: 0,
      id: 9,
      name: "Наушники Apple EarPods USB-C белый",
      description: "Наушники Apple USB-C MYQY3ZM/A — это удобное и практичное решение для тех, кто предпочитает классический дизайн и надёжное качество звука. ✨",
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

     {
      categoryId: 4,
      likes: 0,
      id: 10,
      name: "Наушники Air pro 2 белый",
      description: 'Наушники Air pro 2 белый',
      price: 2250,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/he4/h13/85730021834782.jpg?format=gallery-medium', 
        
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=750000000',
    },
    {
      categoryId: 4,
      likes: 0,
      id: 11,
      name: "Наушники HYDRA Home Minor",
      description: "Наушники HYDRA Home Minor",
      price: 4490,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/p05/p7c/46750488.jpg?format=gallery-medium', 
        
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-hydra-home-minor-bezhevyi-120724130/?c=750000000',
    },

    {
      categoryId: 4,
      likes: 0,
      id: 12,
      name: "Наушники Apple AirPods 4 белый",
      description: "Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни",
      price: 60000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-medium', 
        
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
    },

     {
      categoryId: 4,
      likes: 0,
      id: 13,
      name: 'Наушники JASPER JS70 ',
      description: 'Наушники JASPER JS70 ',
       price: 6000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa8/p4f/66068562.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc4/p4f/66068563.jpg?format=gallery-medium', 
        'https://resources.cdn-kaspi.kz/img/m/p/pe0/p4f/66068564.jpg?format=gallery-medium', 
        
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jasper-js70-bezhevyi-146025818/?c=750000000',
    },

    {
      categoryId: 3,
      likes: 0,
      id: 14,
      name: 'Планшет Xiaomi Redmi Pad 2 11 дюйм 8 Гб/256 Гб ',
      description: 'Планшет Xiaomi Redmi Pad 2 11 дюйм 8 Гб/256 Гб',
      price: 102430 ,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pac/p7a/81439516.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p44/46204507.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-seryi-140639712/?c=750000000'
    },

    {
      categoryId: 3,
      likes: 0,
      id: 15,
      name: 'Планшет Huawei MatePad 11,5 S 2026 Papermatte + подарок 11.5 дюйм 12 Гб/256 Гб ',
      description: 'Планшет Huawei MatePad 11,5 S 2026 Papermatte + подарок 11.5 дюйм 12 Гб/256 Гб ',
      price: 102430 ,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/paa/p2d/96173144.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/paa/p2d/96173144.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p56/p2d/96173147.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-s-2026-papermatte-podarok-11-5-djuim-12-gb-256-gb-seryi-154784586/?c=750000000'
    },

     {
      categoryId: 3,
      likes: 0,
      id: 16,
      name: 'Планшет G-VIIL G2000 10 дюйм 16 Гб/512 Гб',
      description: 'Планшет G-VIIL G2000 10 дюйм 16 Гб/512 Гб',
      price: 32430 ,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p69/p48/13901399.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p69/p48/13901399.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/p48/13901399.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/g-viil-g2000-10-djuim-16-gb-512-gb-chernyi-131636935/?c=750000000'
    },

     {
      categoryId: 3, 
      likes: 0,
      id: 17,
      name: 'Планшет Samsung Galaxy Tab A9 LTE 8.7 дюйм 4 Гб/64 Гб',
      description: 'Планшет Samsung Galaxy Tab A9 LTE 8.7 дюйм 4 Гб/64 Гб',
      price: 132430 ,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3b/p01/77344134.bin?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p3b/p01/77344134.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p57/p01/77344135.bin?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-lte-8-7-djuim-4-gb-64-gb-seryi-113807107/?c=750000000'
    },

    
    {
      categoryId: 2,
      likes: 0,
      id: 18,
      name: 'Ноутбук HYDRA Home H20 15.6" / 12 Гб / SSD 512 Гб / Win 11 / MKII',
      description: 'Ноутбук HYDRA Home H20 15.6" / 12 Гб / SSD 512 Гб / Win 11 / MKII',
      price: 325789 ,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pcf/p46/69607281.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p08/p47/69607283.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/hydra-home-h20-15-6-12-gb-ssd-512-gb-win-11-mkii-115019992/?c=750000000'
    },
    {
      categoryId: 2,
      likes: 0,
      id: 19,
      name: 'Ноутбук Castom E157D 15.6" / 16 Гб / SSD 1000 Гб / Win 11 / 101725124',
      description: 'Ноутбук Castom E157D 15.6" / 16 Гб / SSD 1000 Гб / Win 11 / 101725124',
      price: 225789 ,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p32/pf7/64711809.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/castom-e157d-15-6-16-gb-ssd-1000-gb-win-11-101725124-145214483/?c=750000000'
    },

    {
      categoryId: 2,
      likes: 0,
      id: 20,
      name: 'Ноутбук FIREBAT U6B-IG6616Q8 16" / 16 Гб / SSD 512 Гб / Win 11 Home / IARN79F01',
      description: 'Ноутбук FIREBAT U6B-IG6616Q8 16" / 16 Гб / SSD 512 Гб / Win 11 Home / IARN79F01',
      price: 345789 ,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1c/p4b/111803333.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1c/p4b/111803333.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/pb9/46337305.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/firebat-u6b-ig6616q8-16-16-gb-ssd-512-gb-win-11-home-iarn79f01-136300764/?c=750000000'
    },
  ];


  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  getAllProducts(): Product[] {
  return this.products;
}
}