import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { BookService } from '../_services/book.service';
import { TokenStorageService } from '../_services/token-storage.service';
// import {ApiService} from 'src/app/api.service';
// import { cartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productList : any;
  public filterCategory:any;
  searchKey:string="";
  books!: any[] 
  currentUser: any
  constructor(
      private bookService: BookService,
      private storageService: TokenStorageService
    ){}
  ngOnInit():void{
    this.currentUser = this.storageService.getUser();

    console.log(this.currentUser)
    
    if(!this.currentUser){
      console.log('out')
      window.location.replace('/login')
    } else {
      this.getAll()
    }
    
    // this.CartService.search.subscribe((val:any)=>{
    //   this.searchKey=val;
    // })
  }
  
  getAll(){
    this.bookService.getAllBooks().subscribe({
      next: data => {
        this.books = data
        console.table(this.books)
      },
      error: err => console.error(err)
    })
  }

  getByCategory(category: string) {
    this.bookService.getByCategory(category).subscribe(
      {
        next: data => {
          this.books = data
          console.log(this.books)
        },
        error: err => console.error(err)
      }
    )
  }
  




}


 