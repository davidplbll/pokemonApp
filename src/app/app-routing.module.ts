import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren:'./pages/home/home.module#HomeModule'
  },
  {
    path:'favorite',
    loadChildren:'./pages/favorite/favorite.module#FavoriteModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
