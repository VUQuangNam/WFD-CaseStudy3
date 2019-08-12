import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Subscription} from "rxjs";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Message} from "../models/Message";

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {
  account1 = this.userService.user[0];
  account2 = this.userService.user[1];
  sub: Subscription;
  content = '';
  messages: Message[];
  messageForm: FormGroup;
  user: string;

  constructor(private activatedRoute: ActivatedRoute,
              private userService: UserService
  ) {
    this.messageForm = new FormGroup({
      message: new FormControl('')
    });
    this.messages = [];
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.user = paramMap.get('userName');
    });
  }

  addMessage() {
    if (this.account1.userName !== this.user) {
      this.messages.push(new Message(this.account1, this.content));
    }
    ;

    // if (this.account2.userName !== this.user) {
    //   this.messages.push(new Message(this.account2, this.content));
    // }
    this.content = '';
  }



}
