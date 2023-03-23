import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartDetailComponent } from './shop/cart-detail/cart-detail.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path:'shop', component:ShopComponent},
  {path:'cart', component:CartDetailComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'**', redirectTo:"/shop"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
