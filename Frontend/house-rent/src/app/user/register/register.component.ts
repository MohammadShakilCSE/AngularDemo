import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ConfirmPassword} from './confirm-password.validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm=new FormGroup({
    UserName :new FormControl(),
    Email :new FormControl(),
    Password: new FormControl(),
    ConfirmPassword: new FormControl(),
    mobile:new FormControl(),
   });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm= this.fb.group ({
      UserName :new FormControl('',[Validators.required,Validators.minLength(3)]),
      Email:new FormControl(null,[Validators.required,Validators.email]),
      Password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
      ConfirmPassword:new FormControl(null,[Validators.required]),
     mobile:new FormControl(null,[Validators.required,Validators.maxLength(11)]),
    },{
      validator: ConfirmPassword("Password", "ConfirmPassword")
    });
  }
  //get methods
  get UserName(){
    return this.registrationForm.get('UserName');

  }
  get Email(){
    return this.registrationForm.get('Email');
  }
  get Password(){
    return this.registrationForm.get('Password');
  }
  get ConfirmPassword(){
    return this.registrationForm.get('ConfirmPassword');
  }
  get mobile(){
    return this.registrationForm.get('mobile');
  }

  onSubmit(){
    console.log(this.registrationForm);
  }

}
