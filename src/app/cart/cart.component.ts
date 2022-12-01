import { Component, OnInit } from '@angular/core';
import { cartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product :any=[];
  public grandTotal!:number;
  checkedOut=false

  constructor(private CartService: cartService) { }

  ngOnInit(): void {
    this.CartService.getProduct()
    .subscribe(res=>{
      this.product=res;
      console.log(this.product)
      this.grandTotal=this.CartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.CartService.removeCartItem(item);
  }
  emptycart(){
    this.CartService.removeAllCart();
  }

  }


