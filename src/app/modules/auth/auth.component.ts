import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isLogin:boolean = false;
  emailRegex =new RegExp(/\S+@\S+\.\S+/)
  solvMailRegex = new RegExp(`^[a-zA-Z0-9_-]+@solv\.com\.gh$`)
  passwordRegex = new RegExp(`^[a-zA-Z0-9]`)
  emailErrorMsg:string="";

  loginForm = new FormGroup ({
    email:new FormControl("",[Validators.email, Validators.pattern(this.solvMailRegex)]),
    password: new FormControl("", [Validators.required,])
  })

  signupForm = new FormGroup ({
    email:new FormControl("",[Validators.required, Validators.email, Validators.pattern(this.solvMailRegex)]),
    password1: new FormControl("", [Validators.required,Validators.pattern(this.passwordRegex), Validators.minLength(8), Validators.maxLength(24) ]),
    password2: new FormControl("", [Validators.required,Validators.pattern(this.passwordRegex), Validators.minLength(8), Validators.maxLength(24) ]),
  })
  constructor() { }

  ngOnInit(): void {
  }

  toggleIsLogin() {
    this.isLogin = !this.isLogin;
  }

  login() {
    console.log(this.loginForm)
    if (this.loginForm.invalid) {
      alert("Email or Password is incorrect!");
    } else {
      console.log("no errorrs")
    }
    this.loginForm.reset()
  }

  signup(){
    console.log(this.signupForm)
    if (this.signupForm.invalid) {
      alert("Email or Password is incorrect!");
    } else {
      console.log("no errorrs")
    }
    this.signupForm.reset()
  }

}
