import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const token = window.sessionStorage.getItem('auth-token')

const httpOtions = {
  headers: new HttpHeaders({
    'x-access-token': `${token}`
  })
  
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://localhost:8050/api/books/'
  constructor( private http: HttpClient ) { }


  getAllBooks(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
  }

  getOneBook(id: string): Observable<any> {
    return this.http.get(this.baseUrl+`${id}`)
  }

  getByCategory(category: string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+`?category=${category}`)
  }

  
  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  makeBooking(id: string): Observable<any> {
    return this.http.post(this.baseUrl+id, {}, httpOtions)
  }
}
