import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Pantalla1Component } from './Front/pantalla1/pantalla1.component';
import { Pantalla2Component } from './Front/pantalla2/pantalla2.component';
import { Pantalla3Component } from './Front/pantalla3/pantalla3.component';
import { Pantalla4Component } from './Front/pantalla4/pantalla4.component';
import { Pantalla5Component } from './Front/pantalla5/pantalla5.component';
import { Pantalla6Component } from './Front/pantalla6/pantalla6.component';
import { Pantalla7Component } from './Front/pantalla7/pantalla7.component';

@NgModule({
  declarations: [
    AppComponent,
    Pantalla1Component,
    Pantalla2Component,
    Pantalla3Component,
    Pantalla4Component,
    Pantalla5Component,
    Pantalla6Component,
    Pantalla7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
