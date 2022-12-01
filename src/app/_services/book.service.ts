import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl = 'http://localhost:8050/api/books'
  constructor( private http: HttpClient ) { }


  getAllBooks(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
  }

  getOneBook(id: string): Observable<any> {
    return this.http.get(this.baseUrl+`/${id}`)
  }

  getByCategory(category: string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+`/?category=${category}`)
  }
}
