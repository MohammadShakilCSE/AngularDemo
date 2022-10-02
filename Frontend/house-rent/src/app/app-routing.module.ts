import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpropertyComponent } from './property/addproperty/addproperty.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"register",component:RegisterComponent
  },
  {path:"",component:PropertyListComponent},
  {path:"Addcomponent",component:AddpropertyComponent},
  {path:"proprty-details/:id",component:PropertyDetailsComponent},
  { path:'**' ,component:PropertyListComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
