import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Componenets/not-found/not-found.component';
import { ContentComponent } from './Componenets/content/content.component';
import { BrandComponent } from './Componenets/brand/brand.component';
import { CarComponent } from './Componenets/car/car.component';

const routes: Routes = [

  {path:"",redirectTo:'Cars',pathMatch:'full'},
  // {path:'Booking', component:ContentComponent,title:'BokingMasterDetail'},
  {path:'RentCar', component:BrandComponent,title:'RentCar'},
  {path:'Cars', component:CarComponent,title:'AllCars'},
  {path:"**",component:NotFoundComponent,title:'Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
