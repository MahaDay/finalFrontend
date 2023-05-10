import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/_services/role.service';
import { Role } from 'src/app/models/Role';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent {
  roles: Role[] = [];

  constructor(private roleService: RoleService,
    private router: Router) {}

    ngOnInit() {
      this.roleService.getRoles().subscribe((data: Role[]) => {
        this.roles = data;
        console.log("This roles" , this.roles )
      });
    }

}
