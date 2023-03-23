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
  public selectedCategory : any = null;
  public productsPerPage = 3;
  public selectedPage = 1;

  constructor(private productRepository:ProductRepository, private categoryRepository : CategoryRepository){

  }

  ngOnInit(): void {

  }


  get Products(): Product[] | undefined
  {
    let index = (this.selectedPage - 1) * this.productsPerPage;

    return this.productRepository
          .getProducts(this.selectedCategory)
          ?.slice(index,index + this.productsPerPage);
          // index 1 için slice (0,3)
          // index 3 için slice (3,6)
          //index
  }

  get Categories(): Category[]| undefined
  {

    return this.categoryRepository.getCategories();
  }



  changeCategory(c : Category){
    this.selectedCategory = c;
  }
  changePage(p : number)
  {
    this.selectedPage = p;
  }
}
