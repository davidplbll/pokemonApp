import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonInfoComponent} from './pokemon-info.component'
import {PokemonInfoRouterModule} from './pokemon-info.routing.module'
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [PokemonInfoComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    //PokemonInfoRouterModule,
    MatButtonModule
  ],
  exports:[PokemonInfoComponent],
})
export class PokemonInfoModule { }
