import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),

  });

  constructor(private route: ActivatedRoute, private router: Router,
    public dialogRef: MatDialogRef<UserComponent>,
    private userService: UserService, @Inject(MAT_DIALOG_DATA) public user: User) {

  }

  ngOnInit(): void {
    console.log(this.user);



    this.userForm.setValue({
      name: this.user.name,
      username: this.user.username,
      email: this.user.email,
      address: this.user.address.street,
      company: this.user.company.name
    })


  }

  onSubmit() {
    console.log(this.userForm.value);

    this.dialogRef.close()

  }

}

