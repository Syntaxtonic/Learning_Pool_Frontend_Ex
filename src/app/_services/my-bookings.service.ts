import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../booking/booking';

@Injectable({
  providedIn: 'root'
})
export class MyBookingsService {

  baseUrl = 'http://localhost:8050/api/booking/'

  constructor(
    private http: HttpClient,
  ) { }
  createBooking(id: string | null): Observable<Booking> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Booking>(url).pipe();
  }
}
