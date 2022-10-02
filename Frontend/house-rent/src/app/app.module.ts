import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { AddpropertyComponent } from './property/addproperty/addproperty.component';
import { PropertyComponent } from './property/property/property.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { DetailsComponent } from './property/details/details.component';
import { PropertyDetailsComponent } from './property/property-details/property-details.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddpropertyComponent,
    PropertyComponent,
    PropertyListComponent,
    DetailsComponent,
    PropertyDetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
