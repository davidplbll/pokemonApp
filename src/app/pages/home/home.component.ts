import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs'
import {petitionservice,PokemonService} from './../../services'
import {createStore,Store} from 'redux'
import {reducerPokemon,vibilityFilter} from './../../reducers/pokemon.reducer'
import {PokemonHome,storagePokemon} from './../../interfaces'
import {addItem} from './../../reducers/actions'
import { filter, map } from 'rxjs/operators';
import {fromEvent} from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {PokemonInfoComponent} from './../../components'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(public api:petitionservice,public pokemon:PokemonService,public dialog: MatDialog) { }
  pokemonlist:Observable<any>;
  store:Store<storagePokemon>
  pokemones:PokemonHome[];
  
  ngOnInit() {
    this.store=createStore(reducerPokemon);
    this.store.subscribe(
      ()=>{
        this.pokemones=this.store.getState().allPokemons
      }
    )
    const documentEl=document.documentElement
    fromEvent(document,'scroll').pipe(
      map(()=>documentEl.scrollTop),
      map(event=>{
        const docHeight=documentEl.scrollHeight-documentEl.clientHeight;
        return (event / docHeight) * 100;
      }),
      filter(evt=>evt==100)
    ).subscribe(
      event=>{
        this.getList()
      }
    )
    this.getList()
  }

  addPokemon(pokemon:PokemonHome){
    this.store.dispatch(addItem(pokemon))
  }

  getList(){
    this.pokemon.getPokemonsHome().toPromise().then(
      (pokemons)=>{console.log(pokemons);pokemons.map(pokemon=>this.addPokemon(pokemon))}
    )
  }
  selectPokemon(pokemon:PokemonHome){
      this.dialog.open(PokemonInfoComponent, {
        width: '700px',
        data: pokemon
      });
  }
}
