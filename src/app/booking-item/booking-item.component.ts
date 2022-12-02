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
      }

    })
  }


}
