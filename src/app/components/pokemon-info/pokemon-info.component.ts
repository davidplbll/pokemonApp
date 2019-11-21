import { Component, OnInit,Inject, Optional } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AuthFbService,PokemonService,petitionservice} from './../../services'
import {Pokemon} from './../../interfaces'
@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.sass']
})
export class PokemonInfoComponent implements OnInit {

  PokemonData:Pokemon
    
    constructor(public dialogRef: MatDialogRef<PokemonInfoComponent>, @Optional() @Inject(MAT_DIALOG_DATA) public pokemonHome,public fb:AuthFbService,private pokemon:PokemonService,private api:petitionservice) { }

  ngOnInit() {
    
 console.log("pokemonHome ", this.pokemonHome);
    this.pokemon.getPokemondata(this.pokemonHome["url"]).toPromise().then(
      (pokemon:Pokemon)=>{console.log(pokemon);this.PokemonData=pokemon}
    )

  }

  agregarFavoritos(pokemon:Pokemon){
    this.api.agergarPokemon(this.fb.user["email"],pokemon).then(
      res=>{alert("pokemon agregado con exito");this.dialogRef.close()}
    )
  }
}
