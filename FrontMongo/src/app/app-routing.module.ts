import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pantalla1Component } from './Front/pantalla1/pantalla1.component';
import { Pantalla2Component } from './Front/pantalla2/pantalla2.component';
import { Pantalla3Component } from './Front/pantalla3/pantalla3.component';
import { Pantalla4Component } from './Front/pantalla4/pantalla4.component';
import { Pantalla5Component } from './Front/pantalla5/pantalla5.component';
import { Pantalla6Component } from './Front/pantalla6/pantalla6.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/pantalla2',
    pathMatch:'full'
  },
  {
    path:'pantalla2',
    component:Pantalla2Component
  },
  {
    path:'pantalla3',
    component:Pantalla3Component
  },
  {
    path:'pantalla4/:id',
    component:Pantalla4Component
  },
  {
    path:'pantalla5/:id',
    component:Pantalla5Component
  },
  {
    path:'pantalla6',
    component:Pantalla6Component
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
