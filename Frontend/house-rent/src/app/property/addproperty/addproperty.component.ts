import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  submitForm(Form:NgForm){
    console.log(Form);
    
      console.log("form submitted");
      
  }

  goBack(){
    this.route.navigate(['/']);
  }

}
