import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private postsURL="http://localhost:4200/api/posts";

  constructor(private http:HttpClient) { }
  getBook(){
    return this.http.get<any>(this.postsURL)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getArt(){
    return this.http.get(this.postsURL+'?category=Arts & Entertainment')
  }
  getBiographies(){
    return this.http.get(this.postsURL+'?category=Biographies & memoirs')
  }
  getBusiness(){
    return this.http.get(this.postsURL+'?category=Business & Investing')
  }
  getChildrensbook(){
    return this.http.get(this.postsURL+`?category=Children's books`)
  }
  getComics(){
    return this.http.get(this.postsURL+`?category=Comics`)
  }
  getComputers(){
    return this.http.get(this.postsURL+`?category=Computers & technology`)
  }
  getFiction(){
    return this.http.get(this.postsURL+`?category=Fiction & literature`)
  }
  getHealth(){
    return this.http.get(this.postsURL+`?category=Health,mind and body`)
  }
  getMystery(){
    return this.http.get(this.postsURL+`?category=Mystery & thrillers`)
  }
  getRomance(){
    return this.http.get(this.postsURL+`?category=Romance`)
  }
  getScience(){
    return this.http.get(this.postsURL+`?category=Science fiction & fantasy`)
  }
}
