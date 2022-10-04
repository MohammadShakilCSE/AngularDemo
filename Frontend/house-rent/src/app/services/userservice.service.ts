import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
  addUser(user:any){
    let users=[] ;
    if(localStorage.getItem('LocalUsers')){
      users =JSON.parse(localStorage.getItem('LocalUsers')!);
      users=[user,...users];
    }else{
      users=[user]
    }
    localStorage.setItem("LocalUsers",JSON.stringify(users));
  }
}
