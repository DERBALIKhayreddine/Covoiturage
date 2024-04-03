import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from 'src/app/services/password-match.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private fb:FormBuilder,private authservice:AuthService,private toastr:ToastrService,private router:Router){}
  registerForm = this.fb.group({
    fullName:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    confirmPassword:['',Validators.required],
    role:'normal'

  },{
    validators: passwordMatchValidator
  })
  submitDetails(){
    const postData={...this.registerForm.value}
    delete postData.confirmPassword;
    this.authservice.registerUser(postData as User).subscribe(res=>{
      this.toastr.success('votre compte a ete cree avec success')
      this.router.navigate(['login'])
    },error=>{
      this.toastr.error("probleme d'enregistrement ")

    })
  }
}
