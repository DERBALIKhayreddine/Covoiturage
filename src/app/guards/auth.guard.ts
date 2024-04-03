import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const email = sessionStorage.getItem('email');
    const role = sessionStorage.getItem('role'); // Get the role from session storage
    if (email && (role === 'admin' || role === 'normal')) { // Allow access for both admin and normal users
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
