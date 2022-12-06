import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';
import { Route } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: any
  books: any[] = []
  constructor( private storageService: TokenStorageService, 
    private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();

    console.log(this.currentUser)
    if(!this.currentUser){
      console.log('out')
      window.location.replace('/login')
    } else {
      
      this.userService.userProfile(this.currentUser.id).subscribe({
        next: data => {
          console.log(data)
          this.books = data.books
          console.table(this.books)
        },
        error: err => {
          console.error(err)
        }
      })
    }
    


  }

  

}
