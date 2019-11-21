import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteComponent } from './favorite.component';
import {FavoriteRoutingModule} from './favorite-routing.module'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {PokemonInfoComponent,PokemonInfoModule} from '../../components'
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [FavoriteComponent],
  imports: [
    CommonModule,
    PokemonInfoModule,MatDialogModule,
    FavoriteRoutingModule,MatButtonModule,
    MatCardModule],
  exports:[FavoriteComponent],
  entryComponents:[PokemonInfoComponent]
})
export class FavoriteModule { }
