import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


// httpOptions for set header options
// const httpOptions = {
// 	headers: new HttpHeaders({
// 	  'Accept': 'application/json',
// 	  'Content-Type': 'application/json;'
// 	}),
//   };

@Injectable()
export class petitionservice {
	private token = '';
	public path = '';
	public dominio = '';

	constructor(private http: HttpClient) {
		this.path = 'https://pokeapi.co/api/v2';
		//this.token = "tokn " + this.obtenerToken();
	}

	public get(url: string): Observable<any> {
		return this.http.get(`${this.path}/${url}`);
	}

	public agergarPokemon(correo, pokemon: any) {
		return this.http.post(`https://mydata-31163.firebaseio.com/${correo.replace(/[.]+/g,"")}.json`, pokemon).toPromise().then(
			(res)=>{return res}
		)
	}

	public getPokemonsFavorite(correo ): Observable<any> {
		return this.http.get(`https://mydata-31163.firebaseio.com/${correo.replace(/[.]+/g,"")}.json`).pipe(
			map(data=>
				{let array=[]
					for(let key of Object.keys(data))
						array=[...array,data[key]]
					return array
				}
				)
		);
	}

}
