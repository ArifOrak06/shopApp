import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/ModelViews/cart.model';

@Component({
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public cartService : Cart) { }

  ngOnInit(): void {
  }

}
