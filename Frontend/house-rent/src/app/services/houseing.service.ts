import { HttpClient } from '@angular/common/http';
import { Injectable, ɵisObservable } from '@angular/core';
import {map} from 'rxjs/operators';
import { IProprty } from '../property/IProperty';


@Injectable({
  providedIn: 'root'
})
export class HouseingService {

  properties :Array<IProprty>=[]
  constructor(private http:HttpClient) { }

  url="data/properties.json";
  
  getAllData(SellRent:number){
    return this.http.get<IProprty[]>(this.url).pipe(
      map((data)=>{
       const propertiesArray:Array<IProprty> =[]
        for(const id in data){
          if(data[id].SellRent===SellRent)
            propertiesArray.push(data[id]);
        }
        return propertiesArray;
      })
    );
  }
}
