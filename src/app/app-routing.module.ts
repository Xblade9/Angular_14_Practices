import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CrudComponent } from './components/crud/crud.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormArrayDay1Component } from './components/form-array-day1/form-array-day1.component';
import { AuthGuardGuard } from 'src/auth/auth-guard.guard';
import { FormArrayDay2Component } from './components/form-array-day2/form-array-day2.component';
import { CrudJsonServerComponent } from './components/crud-json-server/crud-json-server.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { FormArrayDay3Component } from './components/form-array-day3/form-array-day3.component';

const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crud', component: CrudComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'orders', component: OrdersComponent },
  {
    path: 'faday1',
    component: FormArrayDay1Component,
    canActivate: [AuthGuardGuard],
  },
  {
    path: 'faday2',
    component: FormArrayDay2Component,
  },
  {
    path: 'crudjs',
    component: CrudJsonServerComponent,
    children: [
      { path: '', redirectTo: 'add-user', pathMatch: 'full' },
      {
        path: 'add-user',
        component: AddUserComponent,
      },
      {
        path: 'user-list',
        component: UserListComponent,
      },
    ],
  },
  { path: 'faday3', component: FormArrayDay3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
