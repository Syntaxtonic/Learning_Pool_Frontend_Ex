import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-booking-item',
  templateUrl: './booking-item.component.html',
  styleUrls: ['./booking-item.component.css']
})
export class BookingItemComponent implements OnInit {
@Input() id: any
book: any
  constructor( private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getOneBook(this.id).subscribe({
      next: data => {
        this.book = data
        console.log(this.book)
      }

    })
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
