import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {
  @ViewChild('TabsForm', { static: false }) staticTabs?:TabsetComponent;
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  submitForm(Form:NgForm){
    console.log(Form);
    
      console.log("form submitted");
      
  }
  selectTab(tabId: number) {
    if (this.staticTabs?.tabs[tabId]) {
      this.staticTabs.tabs[tabId].active = true;
    }
  }

  goBack(){
    this.route.navigate(['/']);
  }

}
