import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    let myUser: User = {
      nick: 'Leonardo',
      age: 25,
      email: 'leotangram@gmail.com',
      friend: true,
      uid: 1
    };
    console.log(myUser);
  }

  ngOnInit() {
  }

}
