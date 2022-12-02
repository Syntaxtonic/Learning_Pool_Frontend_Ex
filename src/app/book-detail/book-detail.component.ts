import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: any
  constructor( private route: ActivatedRoute, private bookService: BookService ) { }

  ngOnInit(): void {
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
    this.bookService.makeBooking(id).subscribe(res => console.log(res))
  }
}
