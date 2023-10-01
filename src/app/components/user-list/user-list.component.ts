import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/user.model';
import { UserService } from 'src/app/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  dataSource!: User[]; //instead of any, we can give model type
  displayedColumns = ['id', 'name', 'username', 'email', 'address', 'company', 'actions'];
  users: User[] = [];

  constructor(private userService: UserService, private router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.users = res;
        console.log(this.users);

        this.dataSource = this.users;

      }
    })
  }

  onClick(user: User) {

    console.log(user); //you can navigate from here by passing user as @Input decorator property

    const dialogRef = this.dialog.open(UserComponent, {
      data: user
    })

  }
}
