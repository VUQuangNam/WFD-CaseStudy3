import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {UserService} from "../user.service";

interface IMessage {
  id: number;
  content: string;
}

let _id = 1;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  userInput = new FormControl();
  messages: Array<IMessage> = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  onChange() {
    const {value} = this.userInput;
    if (value) {
      const message: IMessage = {
        id: _id++,
        content: value
      };
      this.messages.push(message);
      this.userInput.setValue('')
    }
  }

}
