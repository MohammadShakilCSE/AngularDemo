import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/User';
import { AlartfyService } from 'src/app/services/alartfy.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import {ConfirmPassword} from './Confirm-password.validators';


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

   user:User ={'UserName':"",'Email':"",'Password':"",'ConfirmPassword':"",'mobile':""};

   userSubmited:boolean=false;
   
  constructor(private fb:FormBuilder,private userService:UserserviceService,private alartfy:AlartfyService) { }

  ngOnInit(): void {
   this.createRegistrationForm();
  }

  createRegistrationForm(){
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

  onSubmit(){
    console.log(this.registrationForm.value);
    this.userSubmited=true;
   if(this.registrationForm.valid){
    this.UserData();
    this.userService.addUser(this.user);
    this.registrationForm.reset();
    this.userSubmited=false;
    this.alartfy.success("Successfully Resgisterd");
   }else{
    this.alartfy.error("Kindly provides all fileds data");
   }
  }

  UserData():User{
    return this.user={
      UserName:this.UserName?.value,
      Email:this.Email?.value,
      Password:this.Password?.value,
      ConfirmPassword:this.ConfirmPassword?.value,
      mobile:this.mobile?.value,
    }
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

 
  
}
