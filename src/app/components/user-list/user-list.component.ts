import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/models/users';
import { CrudService } from 'src/services/crud.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnChanges {
  @Input() selectedTab!: number;
  usersList: any = [];

  constructor(
    private _crud: CrudService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['selectedTab'] &&
      !changes['selectedTab'].firstChange &&
      changes['selectedTab'].currentValue !== 0
    ) {
      this.getAllUsers();
    }
  }

  getAllUsers() {
    this._crud.getUsers().subscribe((res: Users) => {
      this.usersList = res;
    });
  }

  deleteUserById(id: any) {
    this._crud.deleteUserById(id).subscribe((res: Users) => {
      console.log(res);
      this.toastr.error('User Deleted Successfully');
      this.getAllUsers();
    });
  }

  getUserById(id: any) {
    this.route.navigate(['/crudjs/add-user'], {
      queryParams: { tab: 'add-user' },
    });
    window.location.reload()
    // this._crud.getUserById(id).subscribe((res: Users) => {
    //   console.log(res);
    //   this.toastr.success('User Updated Successfully');
    // });
  }
}
