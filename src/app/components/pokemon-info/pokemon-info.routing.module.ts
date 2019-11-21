import { NgModule } from '@angular/core';
import { PokemonInfoComponent } from './pokemon-info.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    component:PokemonInfoComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PokemonInfoRouterModule { }
