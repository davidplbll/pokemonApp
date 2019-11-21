import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  path = 'https://pokeapi.co/api/v2';
  nextHome=""
  constructor(private http:HttpClient) { }

  getPokemonsHome():Observable<any>{
    return this.http.get(`${this.path}/pokemon${this.nextHome}`).pipe(
      map( (res)=>{
        this.nextHome=String(res["next"]).replace("https://pokeapi.co/api/v2/pokemon","")
        for(let pokemon of res["results"])
            pokemon["id"]=String(pokemon["url"]).replace("https://pokeapi.co/api/v2/pokemon/","").replace("/","")
        return res["results"];})
    )
  }
  getPokemondata(url){
    return this.http.get(url)
  }
}
