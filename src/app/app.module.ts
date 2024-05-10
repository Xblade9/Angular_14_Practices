import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { CrudComponent } from './components/crud/crud.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { OrdersComponent } from './components/orders/orders.component';
import { FormArrayDay1Component } from './components/form-array-day1/form-array-day1.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormArrayDay2Component } from './components/form-array-day2/form-array-day2.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CrudJsonServerComponent } from './components/crud-json-server/crud-json-server.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { FormArrayDay3Component } from './components/form-array-day3/form-array-day3.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    CrudComponent,
    LessonsComponent,
    OrdersComponent,
    FormArrayDay1Component,
    HeaderComponent,
    FooterComponent,
    FormArrayDay2Component,
    CrudJsonServerComponent,
    AddUserComponent,
    UserListComponent,
    FormArrayDay3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    MatTabsModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
