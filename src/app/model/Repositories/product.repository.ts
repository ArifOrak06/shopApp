import {Injectable, OnInit} from '@angular/core';
import { map, Observable } from 'rxjs';
import { Category } from '../ModelViews/category.model';
import { Product } from '../ModelViews/product.model';
import { RestService } from '../rest.service';

@Injectable()
export class ProductRepository implements OnInit
{
  private products : Product[] = [];

  constructor(private restService : RestService)
  {
    this.restService
    .getProducts()
    .subscribe(products => this.products = products);
  }


  ngOnInit(): void {

  }

  getProduct(productId?:number) : Product | undefined
  {
    return this.products.find(x => x.id === productId);
  }
  getProducts(category? : Category) : Product[]|undefined
  {
    if(category != null)
      return this.products.filter(x=> x.category == category?.name);
    return this.products;
  }

}
