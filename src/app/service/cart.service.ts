import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  getBook() {
    throw new Error('Method not implemented.');
  }
  public cartItemList: any=[]
  public bookList=new BehaviorSubject<any>([]);
  public search=new BehaviorSubject<string>("");

  constructor() {}
  getProduct(){
    return this.bookList.asObservable();
  }
  setProduct(product :any){
    // this.cartItemList.push(book);
    this.bookList.next(this.cartItemList);
    this.getTotalPrice(); 
  }
  getTotalPrice():number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=a.total;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.bookList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList=[]
    this.bookList.next(this.cartItemList);
  }
}



