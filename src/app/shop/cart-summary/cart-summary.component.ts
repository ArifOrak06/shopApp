import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/ModelViews/cart.model';

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cartService? : Cart) { }

  ngOnInit(): void {
  }

}
