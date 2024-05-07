import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  crudForm!:FormGroup;
  formdata:any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.getCrudForm()
  }

  getCrudForm(){
    this.crudForm = this.fb.group({
      users:this.fb.array([])
    })
  }

  //aliases to access the users form array...

  get users(){
    return this.crudForm.controls['users'] as FormArray;
  }

  //add users...

  addUsers(){
    const addUser = this.fb.group({
      name:['',Validators.required],
      state:['',Validators.required],
      city:['',Validators.required]
    })
    this.users.push(addUser);
  }

  updateUsers(index:number,updateUser:any){
    const uuser = this.users.at(index);
    uuser.patchValue(updateUser)
    
  }

  deleteUsers(index:number){
    return this.users.removeAt(index)
  }

  saveUser(){
    if(this.crudForm.valid){
      this.formdata = this.crudForm.value
      console.log(this.formdata);
    }else{
      this.formdata ='';
    }
  }

}
