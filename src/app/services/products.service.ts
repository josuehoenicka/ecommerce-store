// @angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// models
import { Product } from '../models/product.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  myPersonalProducts = [
    {
      id: 1,
      title: 'Army Of Two II',
      price: 45,
      image: '../../../assets/images/aot2.jpg'
    },
    {
      id: 2,
      title: 'inFAMOUS 2',
      price: 40,
      image: '../../../assets/images/infamous2.jpg'
    },
    {
      id: 3,
      title: 'All-Stars',
      price: 40,
      image: '../../../assets/images/allstar.jpg'
    },
    {
      id: 4,
      title: 'Minecraft',
      price: 35,
      image: '../../../assets/images/minecraft.jpg'
    },
    {
      id: 5,
      title: 'Ratchet',
      price: 25,
      image: '../../../assets/images/ratchet.jpg'
    }
  ]

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

}
