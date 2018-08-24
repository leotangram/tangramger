import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends: User[];
  constructor() {
    let usuario1: User = {
      nick: 'Leonardo',
      subnick: 'Tangram',
      age: 25,
      email: 'leotangram@gmail.com',
      friend: true,
      uid: 1
    };
    let usuario2: User = {
      nick: 'Eduardo',
      subnick: 'Mi mensaje personal',
      age: 28,
      email: 'eduardo@eduardo.com',
      friend: true,
      uid: 2
    };
    let usuario3: User = {
      nick: 'Carlos',
      subnick: 'Mi mensaje personal',
      age: 28,
      email: 'carlos@carlos.com',
      friend: true,
      uid: 3
    };
    let usuario4: User = {
      nick: 'Marcos',
      subnick: 'Mi mensaje personal',
      age: 28,
      email: 'marcos@marcos.com',
      friend: true,
      uid: 4
    };
    let usuario5: User = {
      nick: 'Juan',
      subnick: 'Mi mensaje personal',
      age: 28,
      email: 'juan@juan.com',
      friend: true,
      uid: 5
    };
    this.friends = [usuario1, usuario2, usuario3, usuario4, usuario5];
  }

  ngOnInit() {
  }

}
