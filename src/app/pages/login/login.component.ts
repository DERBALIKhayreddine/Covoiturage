import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder,private authservice:AuthService,private router:Router,private toastr:ToastrService ) {}
  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]]
  })
getEmail(){
  return this.loginForm.controls['email']
}
getPassword(){
  return this.loginForm.controls['password']
}
loginUser() {
  const { email, password } = this.loginForm.value;
  const adminRequest = this.authservice.getUserByEmailAndRole(email as string, 'admin');
  const normalRequest = this.authservice.getUserByEmailAndRole(email as string, 'normal');
  forkJoin([adminRequest, normalRequest]).subscribe(
    ([adminUsers, normalUsers]) => {
      const users = adminUsers.concat(normalUsers); // Merge the results from both requests
      console.log('Users:', users);
      const user = users.find(u => u.password === password);
      if (user) {
        const userRole = user.role;
        sessionStorage.setItem('email', email as string);
        if (userRole === 'admin') {
          sessionStorage.setItem('role', 'admin');
          this.router.navigate(['/admindashboard']);
        } else {
          sessionStorage.setItem('role', 'normal');
          this.router.navigate(['/userdashbord']);
        }
      } else {
        console.log('Entered password:', password);
        this.toastr.error('Invalid credentials. Please check your email and password.');
      }
    },
    error => {
      console.error('Error during login:', error);
      this.toastr.error('An error occurred during login. Please try again later.');
    }
  );
}


}
