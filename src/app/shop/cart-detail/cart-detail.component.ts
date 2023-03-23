import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/ModelViews/cart.model';

@Component({
  selector: 'cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

  constructor(public cartService : Cart) { }

  ngOnInit(): void {
  }


}
