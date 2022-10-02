import { Component, OnInit ,Input} from '@angular/core';
import { IProprty } from '../IProperty';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  @Input() property:IProprty={Id:0,SellRent:1,Name:"",Type:"",Price:0,ImagesUrl:""};

  constructor() { }

  ngOnInit(): void {
  }

}
