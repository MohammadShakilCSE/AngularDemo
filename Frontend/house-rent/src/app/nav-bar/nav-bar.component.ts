import { Component, OnInit } from '@angular/core';
import { AlartfyService } from '../services/alartfy.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedInUser:string | null=""
  constructor( private alartfy:AlartfyService) { }

  ngOnInit(): void {
  }

  onLogin(){
     this.loggedInUser= localStorage.getItem('token');
     return this.loggedInUser;
  }
  onLogout(){
    localStorage.removeItem('token');
    this.alartfy.success("You are logged out");
  }

 
  onHidden(): void {
    console.log('Dropdown is hidden');
  }
  onShown(): void {
    console.log('Dropdown is shown');
  }
  isOpenChange(): void {
    console.log('Dropdown state is changed');
  }
}
