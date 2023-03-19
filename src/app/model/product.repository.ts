import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './ModelViews/product.model';
import { RestService } from './rest.service';

@Injectable()
export class ProductRepository implements OnInit
{
  private products : Product[] = [];

  constructor(private restService : RestService)
  {

  }


  ngOnInit(): void {
    this.restService
      .getProducts()
      .subscribe(products => this.products = products);
  }

  getProduct(productId?:number) : Product | undefined
  {
    return this.products.find(x => x.id === productId);
  }

}
