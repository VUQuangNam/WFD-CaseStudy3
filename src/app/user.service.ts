import {Injectable} from '@angular/core';

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
    {id: '1', username: 'Akhilian', status: true, content: '11111111111'},
    {id: '2', username: 'supertinou', status: false, content: '222222'},
    {id: '3', username: 'alex-cory', status: true, content: 'eqeqwewdwd'},
    {id: '4', username: 'ander', status: false, content: 'asdasdadad'},
  ];
  user = [{
    id: '1', username: 'Alex', status: 'online'
  }];

  constructor() {
  }
}
