import { Component, OnInit } from '@angular/core';
import {petitionservice,PokemonService,AuthFbService} from '../../services'
import {PokemonHome} from '../../interfaces'
import {MatDialog} from '@angular/material/dialog';
import {PokemonInfoComponent} from '../../components'

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.sass']
})
export class FavoriteComponent implements OnInit {

  list
  constructor(public fb:AuthFbService,public api:petitionservice,public pokemon:PokemonService,public dialog: MatDialog) { }
  
  ngOnInit() {
    this.list=this.api.getPokemonsFavorite(this.fb.user["email"])
  }

 

  selectPokemon(pokemon:PokemonHome){
      this.dialog.open(PokemonInfoComponent, {
        width: '700px',
        data: pokemon
      });
  }
}
