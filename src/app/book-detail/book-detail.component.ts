import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../_services/book.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {


  book: any
  currentUser: any
  constructor( 
    private route: ActivatedRoute, 
    private bookService: BookService, 
    private router: Router,
    private storageService: TokenStorageService 
    ) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    console.log(this.currentUser)
    this.getABook()
  
  }

  getABook(){
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)

    this.bookService.getOneBook(`${id}`).subscribe({
      next: data => {
        this.book = data
        console.log(this.book)
      }
    })
  }

  booking(id: string): void {
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

  deleteTutorial(): void {
    this.bookService.delete(this.book.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        error: (e) => console.error(e)
      });
  }
}
