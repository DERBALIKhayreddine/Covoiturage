import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {}

  isLoggedIn(): boolean {
    return sessionStorage.getItem('email') !== null;
  }

  isAdmin(): boolean {
    return sessionStorage.getItem('role') === 'admin';
  }
  isnomal():boolean{
    return sessionStorage.getItem('role') === 'normal';
  }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/']); // Redirect to login page upon logout
  }
}
