import { NgModule } from '@angular/core';
import { FavoriteComponent } from './favorite.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:FavoriteComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class FavoriteRoutingModule { }
