import {Injectable} from '@angular/core';
import {User} from "./User";

interface IUser {
  id: string,
  username: string,
  status: boolean,
  content: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: IUser[] = [
    {id: '1', username: 'Akhilian', status: true, content: 'hello'},
    {id: '2', username: 'supertinou', status: false, content: 'hello2'},
    {id: '3', username: 'alex-cory', status: true, content: 'hello13'},
    {id: '4', username: 'ander', status: false, content: 'hello14'},
  ];
  user: User[] = [{
    userName: 'Myaccount'
  },
    //   {
    //   userName: 'account2'
    // }
  ];

  constructor() {
  }

}
