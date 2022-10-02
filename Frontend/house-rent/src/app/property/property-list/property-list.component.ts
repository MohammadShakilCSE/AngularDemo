import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HouseingService } from 'src/app/services/houseing.service';
import { IProprty } from '../IProperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Sellrent=1;
  constructor(private route:ActivatedRoute,private houseingService:HouseingService) { }
  properties:Array<IProprty>=[]
  ngOnInit(): void {
    if(!this.route.snapshot.url.toString()){
      this.Sellrent=2;
    }
    this.houseingService.getAllData(this.Sellrent).subscribe(data=>{
      this.properties=data;
      console.log(data);
    },error=>{
      console.log(error);
      
    })
  }

}
