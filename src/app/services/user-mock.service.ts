import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserMockService {
  users: string[] = ["Imran"]

  constructor() { }

  getUsers():string[]
  {
    return this.users
  }

  addUser(name:string,password:string):void
  {
    this.users.push(name)
    console.log(this.users)
  }
}
