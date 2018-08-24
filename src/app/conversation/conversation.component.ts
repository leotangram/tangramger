import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {
  friendId: any;
  constructor(private activateRoute: ActivatedRoute) {
    this.friendId = this.activateRoute.snapshot.params['uid'];
    console.log(this.friendId);
  }

  ngOnInit() {
  }

}
