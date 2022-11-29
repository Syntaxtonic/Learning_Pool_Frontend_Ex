import { Component, OnInit, Input } from '@angular/core';
import { cartService } from 'src/app/cart.service';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() isLoggedIn: any

  public totalItem:number=0;
  public searchTerm:string='';
  constructor(private CartService:cartService, private authService: AuthService, private storageService: TokenStorageService) { }

  ngOnInit(): void {
    this.CartService.getProduct()
    .subscribe(res=>{
      this.totalItem=res.length;
    })
  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value;
    this.CartService.search.next(this.searchTerm)
    
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.isLoggedIn = false
        window.sessionStorage.clear()
      },
      error: err => {
        console.log(err);
      }
    });
    
    window.location.replace('/login');
  }

}
