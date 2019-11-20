import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


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

	public delete(url: string, id: string): Observable<any> {
		return this.http.delete(`${this.path}/${url}`);
	}

	public post(url: string, body: any): Observable<any> {
		return this.http.post(`${this.path}/${url}`, body);
	}

	public put(url: string, body: any, id): Observable<any> {
		return this.http.put(`${this.path}/${url}${id}`, body);
	}

	public getId(url: string, id: string): Observable<any> {
		return this.http.get(`${this.path}/${url}/${id}`);
	}

	/**
	 * ejecutarGet
	 */
	public ejecutarGet(url: string) {
		//this.spinner.show();
		return this.get(url).toPromise().then(
			(res) => {
				//this.spinner.hide();
				return res;
			},
			err => {
				//this.spinner.hide();
				this.chageAuth("Usrtkn");
				//console.clear();
				return err;
			}
		);
	}
	/**
	 * ejecutarDelete
	 */
	public ejecutarDelete(url: string, id: string) {
		//this.spinner.show();
		return this.delete(url, id).toPromise().then(
			(res) => {
				//this.spinner.hide();
				return res;
			},
			(err) => {
				//this.spinner.hide();
				this.chageAuth("Usrtkn");
				//console.clear();
				return err;
			}
		);
	}
	/**
	 * ejecutarGetId
	 */
	public ejecutarGetId(url: string, id: string) {
		//this.spinner.show();
		return this.getId(url, id).toPromise().then(
			(res) => {
				//this.spinner.hide();
				return res;
			},
			(err) => {
				//this.spinner.hide();
				this.chageAuth("Usrtkn");
				//console.clear();
				return err;
			}
		);
	}
	/**
	 * ejecutarPost
	 */
	public ejecutarPost(url, body) {
		//this.spinner.show();
		return this.post(url, body).toPromise().then(
			res => {
				//this.spinner.hide();
				return res;
			},
			(err) => {
				//this.spinner.hide();
				this.chageAuth("Usrtkn");
				//console.clear();
				return err;
			}
		);
	}


	public ejecutarPut(url, body, id) {
		//this.spinner.show();
		return this.put(url, body, id).toPromise().then(
			res => {
				//this.spinner.hide();
				return res;
			},
			(err) => {
				this.chageAuth("Usrtkn");
				//this.spinner.hide();
				//console.clear();
				return err;
			}
		);
	}



	/**
	 * obtenerToken
	 */
	public obtenerToken(name) {
		let cookies = document.cookie.split(";");
		for (let cook of cookies) {
			if (cook.split("=")[0].trim() == name) {
				return cook.split("=")[1]
			}
		}
		//this.router.navigate(['/login']);
		return ""
	}

	public crearHeader() {
		let header = new HttpHeaders(
			{
				'authorization': this.obtenerToken("auth"),
				'authorizationprovider':this.obtenerToken("Prvtkn"),
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		);
		return header
	}

	chageAuth(key){
		document.cookie="auth="+this.obtenerToken(key);
	}
}
