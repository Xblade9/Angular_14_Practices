import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  form!:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      address:this.fb.group({
        name:[''],
        state:[''],
        city:['']
      }),aliases:this.fb.array([this.fb.control('')])
    });

    // this.addAlias()
  }

  get aliases(){
    return this.form.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.fb.control(''));
  }

  removeAlias(index:any){
    this.aliases.removeAt(index)
  }

  submit(){
    if(this.form.valid){
      console.log(this.form.value);
    }else{
      console.log('Form Not valid');
    }
  }
}
