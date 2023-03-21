import { Component, OnInit } from "@angular/core";
import { Category } from "../model/ModelViews/category.model";
import { Product } from "../model/ModelViews/product.model";
import { CategoryRepository } from "../model/Repositories/category.repository";
import { ProductRepository } from "../model/Repositories/product.repository";

@Component({
  selector:'shop',
  templateUrl:'shop.component.html',
  styles:[`
    .pt-100{
      padding-top:100px;
    }
  `]
})
export class ShopComponent implements OnInit
{
  selectedCategory : any = null;
  constructor(private productRepository:ProductRepository, private categoryRepository : CategoryRepository){

  }

  ngOnInit(): void {

  }


  get Products(): Product[] | undefined
  {

    return this.productRepository.getProducts(this.selectedCategory);
  }

  get Categories(): Category[]| undefined
  {

    return this.categoryRepository.getCategories();
  }



  changeCategory(c : Category){
    this.selectedCategory = c;
  }
}
