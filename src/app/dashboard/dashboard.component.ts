import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: any
  books: any[] = []
  constructor( private storageService: TokenStorageService, private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    console.log(this.currentUser.id)
    if(this.currentUser)
    this.userService.userProfile(this.currentUser.id).subscribe({
      next: data => {
        this.books = data.books
        console.table(this.books)
      },
      error: err => {
        console.error(err)
      }
    })


  }

  

}
