import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { RestService } from './rest.service';
import { ProductRepository } from './Repositories/product.repository';
import { CategoryRepository } from './Repositories/category.repository';
import { Cart } from './ModelViews/cart.model';
import { Order } from './ModelViews/order.model';
import { OrderRepository } from './Repositories/order.repository';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers:[
    RestService,ProductRepository,CategoryRepository,Cart,Order,OrderRepository
  ]
})

export class ModelModule {


 }
