import { Component, OnInit } from '@angular/core';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: any = {
    title: '',
    description: '',
    category: '',
    image: ''
    // published: false
  };
  submitted = false;

  constructor( private bookService: BookService ) { }

  ngOnInit(): void {
  }

  saveTutorial(): void {
    const data = {
      title: this.book.title,
      description: this.book.description,
      category: this.book.category,
      image: this.book.image
    };

    this.bookService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newTutorial(): void {
    this.submitted = false;
    this.book = {
      title: '',
      description: '',
      category: '',
      image: ''
    };
  }

}
