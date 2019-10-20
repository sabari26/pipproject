import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";

@Injectable()
export class UserService {
  usersDetails: User[] = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
   {id: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
   {id: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
   {id: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
 ];
  constructor(private http: HttpClient) { }
  baseUrl: string = '/user-portal/users';

  getUsers() {
   //return Observable.of(this.usersDetails).delay(5000);
   return this.usersDetails;
  //return this.http.get<User[]>(this.baseUrl);
  }

  getUserById(id: string) {
    if(id !== undefined) {
      for(let i=0; i<this.usersDetails.length; i++) {
        if(Number(this.usersDetails[i].id) === Number(id)) {
          return this.usersDetails[i];
          break;
        }
      }
      //return Observable.of(this.usersDetails[id]).delay(2000);
    }
    //return this.http.get<User>(this.baseUrl + '/' + id);
  }

  createUser(user: User) {
    user.id = this.usersDetails.length + 1;
    return this.usersDetails.push(user);
    //return Observable.of(this.usersDetails.push(user)).delay(2000);
  }

  updateUser(user: User) {
    for(let i=0; i<this.usersDetails.length; i++) {
      if(Number(this.usersDetails[i].id) === Number(user.id)) {
        this.usersDetails[i] = user;
        return this.usersDetails;
        break;
      }
    }

    //return Observable.of(this.usersDetails).delay(2000);
    //return this.http.put(this.baseUrl + '/' + user.id, user);
  }

  deleteUser(id: number) {
    var deleteUserIndex = -1;
    this.usersDetails.forEach((user, index) => {
      if(user.id === id) {
        deleteUserIndex = index;
        this.usersDetails.splice(deleteUserIndex, 1);
        return this.usersDetails;
      }
    });
    return this.usersDetails;
    //return Observable.of(this.usersDetails).delay(2000);
    //return this.http.delete(this.baseUrl + '/' + id);
  }
}
