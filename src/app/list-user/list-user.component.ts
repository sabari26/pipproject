import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit, AfterViewInit {

  users: User[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }
  ngAfterViewInit() {
    this.users = this.userService.getUsers();
  }

  deleteUser(user: User) {
    this.users = this.userService.deleteUser(user.id);
    // this.userService.deleteUser(user.id)
    //   .subscribe( data => {
    //     this.users = this.users.filter(u => u !== user);
    //   })
  };

  editUser(user: User) {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}
