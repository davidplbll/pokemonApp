import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule,MatIconModule,MatToolbarModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {petitionservice,AuthFbService,PokemonService} from './services'
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import {MatButtonModule} from '@angular/material/button';
import {ProfileHeaderModule} from './components';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    HttpClientModule,
    ProfileHeaderModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatButtonModule
  ],
  providers: [petitionservice, AuthFbService,PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
