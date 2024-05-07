import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Users } from 'src/models/users';
import { CrudService } from 'src/services/crud.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, OnChanges {
  @Input() selectedTab: string = '';
  usersList: any = [];

  constructor(private _crud: CrudService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['selectedTab'] &&
      !changes['selectedTab'].firstChange &&
      changes['selectedTab'].currentValue !== 'Add User'
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
    // debugger
    this._crud.deleteUserById(id).subscribe((res: Users) => {
      console.log(res);
      this.toastr.error('User Deleted Successfully')
      this.getAllUsers()
    });
  }
}
