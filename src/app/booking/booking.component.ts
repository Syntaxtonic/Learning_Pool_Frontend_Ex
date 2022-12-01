import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  public product :any=[];
  public grandTotal!:number;
  checkedOut = false

  bookings: any[] = localStorage.getItem('booking') ?  JSON.parse(`${localStorage.getItem('booking')}`) : []
  constructor() { }

  ngOnInit(): void {
      console.log(this.bookings)
  }
  removeItem(item: any){
    
  }
  emptycart(){
    
  }

}
