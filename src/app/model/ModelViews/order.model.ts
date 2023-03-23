import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order
{
   public id : number;
   public name: string;
   public address: string;
   public city:string;
   public phone:string;
   public email:string;

   public isSent:boolean =false;

   constructor(public cart : Cart){

   }

   clearOrder(){
    this.id = null;
    this.address = null;
    this.name = null;
    this.city = null;
    this.phone = null;
    this.email = null;

    this.cart.clear();
   }
}
