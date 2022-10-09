import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProprty } from '../IProperty';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {
  @ViewChild('TabsForm', { static: false }) staticTabs?:TabsetComponent;

  propertiView:IProprty={
    Id:null,
    Name:'',
    SellRent:null,
    Type:'',
    Price:null
  }
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  submitForm(Form:NgForm){
    console.log(Form);
    
      console.log("form submitted");
      
  }
    Numbers:Array<string>=["1","2","3","4"]
    propertyTypes:Array<string>=["House","Appartment","Duplex"];
    furnishTypes:Array<string>=["Fully","Semi","Unfurnished"];
    
  ready:Array<string>=["Yes","No"];
  gated:Array<string>=["Yes","No"];
  move:Array<string>=["East","West","South","North"];

  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  goBack(){
    this.route.navigate(['/']);
  }

}
