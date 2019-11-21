import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthFbService {

  user
  constructor( public afAuth: AngularFireAuth) {
    this.verifyAuth();
  }

  FacebookAuth() {
    return this.AuthLogin(new auth.FacebookAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
     console.log("result ", result);
    }).catch((error) => {
        console.log(error)
    })
  }
  verifyAuth(){
   return  this.afAuth.authState.pipe(
     map((profile)=>  {if (profile) return {name:profile.displayName,email:profile.email,photo:profile.photoURL}
                        else return null } )
   ).subscribe(
     (user)=>this.user=user
   )
  }

  logout(){
    this.afAuth.auth.signOut()
  }
}
