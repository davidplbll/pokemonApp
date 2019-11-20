import { Component, OnInit } from '@angular/core';
import {petitionservice} from './../../services'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(public api:petitionservice) { }

  ngOnInit() {
    
  }

}
