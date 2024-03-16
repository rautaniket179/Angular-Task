import { Component, OnInit } from '@angular/core';

interface Product {
  name: string;
  price: number;
  quantity: number;
}
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products: Product[] = [
    { name: 'Product 1', price: 10, quantity: 0 },
    { name: 'Product 2', price: 20, quantity: 0 },
    { name: 'Product 3', price: 30, quantity: 0 }
  ];

  updateTotalPrice(product: Product): void {
    product.quantity = Number(product.quantity); 
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
