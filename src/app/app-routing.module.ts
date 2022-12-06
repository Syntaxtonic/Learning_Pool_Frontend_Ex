import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bookings', component: BookingComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'book-detail/:id', component:BookDetailComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
