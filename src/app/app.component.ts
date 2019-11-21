import { Component, OnInit } from '@angular/core';
import { petitionservice,AuthFbService } from './services'
import { map } from 'rxjs/operators';
import {createStore,Store} from 'redux'
import {allPokemons,reducerPokemon,vibilityFilter} from './reducers/pokemon.reducer'
import {Pokemon,storagePokemon} from './interfaces'
import {addItem} from './reducers/actions'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  pokedex
  store:Store<storagePokemon>
  pokemones:Pokemon[];

  constructor(public api: petitionservice,public fb:AuthFbService,public router:Router) {
    this.pokedex = this.api.get("pokedex").pipe(
      map((gens) => gens.results)
    );
  }

  ngOnInit(){
    this.store=createStore(reducerPokemon);
    const unsubscribe = this.store.subscribe(()=>{
      const filter= this.store.getState().allPokemons
 console.log("filter ", filter);
    })
  }
  gotoHome(){
    this.router.navigateByUrl("/")
  }


}
