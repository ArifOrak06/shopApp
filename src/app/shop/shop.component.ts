import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../model/ModelViews/cart.model";
import { Category } from "../model/ModelViews/category.model";
import { Product } from "../model/ModelViews/product.model";
import { CategoryRepository } from "../model/Repositories/category.repository";
import { ProductRepository } from "../model/Repositories/product.repository";

@Component({
  selector:'shop',
  templateUrl:'shop.component.html'

})
export class ShopComponent implements OnInit
{
  public selectedCategory : any = null;
  public productsPerPage: number = 3;
  public selectedPage:number = 1;

  constructor(
    private productRepository:ProductRepository,
    private categoryRepository : CategoryRepository,
    private cartService : Cart,
    private router : Router
    ){  }

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
  addProductToCart(product?:Product)
  {
    this.cartService.addItem(product);
    this.router.navigateByUrl('/cart');
  }
}
