import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from 'src/app/model/model.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ShopComponent } from './shop.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [ShopComponent, NavbarComponent],
  imports: [
    CommonModule,ModelModule,BrowserModule,FormsModule
  ],
  exports: [
    ShopComponent
  ]
})
export class ShopModule { }
