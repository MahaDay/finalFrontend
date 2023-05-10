import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users: User[] = [];

  constructor(private userService: UserService,
    private router: Router) {}

    ngOnInit() {
      this.userService.getUserBoard().subscribe((data: User[]) => {
        this.users = data;
        console.log("This clients" , this.users )
      });
    }

}
