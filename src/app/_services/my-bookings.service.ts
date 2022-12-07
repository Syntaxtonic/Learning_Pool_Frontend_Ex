import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../booking/booking';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyBookingsService {

  baseUrl = environment.baseApi+'/booking/'

  constructor(
    private http: HttpClient,
  ) { }
  createBooking(id: string | null): Observable<Booking> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Booking>(url).pipe();
  }
}
