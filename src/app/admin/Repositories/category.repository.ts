import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/ModelViews/category.model';
import { RestService } from 'src/app/model/rest.service';


@Injectable()
export class CategoryRepository implements OnInit
{
  private categories : Category[] = [];

  constructor(private restService : RestService)
  {

  }


  ngOnInit(): void {
    this.restService
      .getProducts()
      .subscribe(products => this.categories = products);
  }

  getProduct(categoryId?:number) : Category | undefined
  {
    return this.categories.find(x => x.id === categoryId);
  }

}
