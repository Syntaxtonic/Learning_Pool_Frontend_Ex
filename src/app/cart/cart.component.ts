import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public book :any=[];
  public grandTotal!:number;
  checkedOut=false

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cartService.getBook()
    // .subscribe((res:any)=>{
    //   this.book=res;
    //   console.log(this.book)
    //   this.grandTotal=this.cartService.getTotalPrice();
    // })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  }


