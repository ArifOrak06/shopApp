import { Product } from "./product.model";
import { Injectable } from "@angular/core";


@Injectable()

export class Cart
{
    public  items : CartItem[] = [];
    public itemCount : number = 0;
    public total:number = 0;


    addItem(product:Product, quantity:number = 1) {
      // kullanıcı sepetine eklemek istediği veriyi daha önce ekleyip eklemediği çok önemli eğer
      // eklemiş ise miktar bilgisini yanmi quantity'i istediği kadar artıracağız,
      // ekli değilse ? urnmi bir cartItem objesi oluşturup liste üzerine eklememiz lazım.
      let item = this.items.find(i => i.product.id == product.id);
      if(item!=undefined)
      {
        item.quantity += quantity;
      }
      else{
        this.items.push(new CartItem(product,quantity));
      }

      this.calculate();

    }

    calculate()
    {
        this.itemCount = 0;
        this.total = 0;
        this.items.forEach(item => {
          this.itemCount += item.quantity;
          this.total += (item.quantity * item.product.price)

        })
    }
    updateQuantity(product:Product, quantity:number)
    {
        let item = this.items.find(i => i.product.id == product.id);
        if(item!=undefined)
        {
          item.quantity = quantity;
        }
        this.calculate();
    }
    removeItem(id:number)
    {
      let index = this.items.findIndex(i => i.product.id == id);
      this.items.splice(index,1); // gönderilen indexten itibaren 1 elemanı sil
      // silme işleminden sonra sepeti y3eniden hesaplatmamız gerekmektedir.
      this.calculate();
    }
    clear()
    {
      this.items = [];
      this.itemCount = 0;
      this.total = 0;
    }

}

export class CartItem
{
  constructor(

    public product: Product,
    public quantity: number

    ) {  }
}


