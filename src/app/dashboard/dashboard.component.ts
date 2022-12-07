import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Route } from '@angular/router';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: any
  book: any
  user: any
  books: any[] = []
  constructor( 
    private storageService: TokenStorageService, 
    private userService: UserService,
    private bookService: BookService
    ) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();

    console.log(this.currentUser)
    if(this.currentUser.roles[0] == 'ROLE_ADMIN'){
      this.bookService.getAllBooks().subscribe({
        next: data => {
          this.books = data.filter(ele => ele.status == true)
          console.log(this.books)
        }
      })
    } else {
      
      this.userService.userProfile(this.currentUser.id).subscribe({
        next: data => {
          console.log(data)
          this.books = data.books
          this.user = data
          console.table(this.books)
        },
        error: err => {
          console.error(err)
        }
      })
    }
    


  }

  unBook(id: string): void {
    this.bookService.makeBooking(id).subscribe(res => {
      this.book.status = !this.book.status
      console.log(this.book)

      console.log(res)
      this.update(this.book)
    })
  }

  update(book: any) {
    if(this.book)
    this.bookService.update(this.book.id, book).subscribe({
      next: data => {
        console.log(data)
        
        
      },
      error: err => {
        console.error(err)
      }
    })
  }

  

}
