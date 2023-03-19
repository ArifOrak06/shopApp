import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './ModelViews/product.model';
import { Observable } from 'rxjs';
import { Category } from './ModelViews/category.model';

@Injectable()
export class RestService {

  baseUrl : string = "http://localhost:3500/";
  constructor(private httpClient : HttpClient) {


  }

  getProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseUrl}products`);
  }
  getCategories():Observable<Category[]>
  {
    return this.httpClient.get<Category[]>(`${this.baseUrl}categories`);
  }
}
