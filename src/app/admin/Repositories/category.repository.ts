import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/ModelViews/category.model';
import { RestService } from 'src/app/model/rest.service';


@Injectable()
export class CategoryRepository implements OnInit
{
  private _categories : Category[] = [];

  constructor(private restService : RestService)
  {

  }


  ngOnInit(): void {
    this.restService
      .getCategories()
      .subscribe(categories => this._categories = categories);
  }

  getProduct(categoryId?:number) : Category | undefined
  {
    return this._categories.find(x => x.id === categoryId);
  }

}
