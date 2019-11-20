import { Component, OnInit } from '@angular/core';
import { petitionservice } from './services/petitions'
import { map } from 'rxjs/operators';
import {createStore,Store} from 'redux'
import {allPokemons,reducerPokemon,vibilityFilter} from './reducers/pokemon.reducer'
import {Pokemon,storagePokemon} from './interfaces'
import {addItem} from './reducers/actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  pokedex
  store:Store<storagePokemon>
  pokemones:Pokemon[];

  constructor(public api: petitionservice) {
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

    setTimeout(() => {
      this.api.get("pokemon/1/").toPromise().then(
        (pokemon) => this.addPokemon(pokemon)
      );
    }, 10000);
  }

  addPokemon(pokemon:Pokemon){
 console.log("pokemon ", pokemon);
    this.store.dispatch(addItem(pokemon))
  }

}
