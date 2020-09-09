import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup , FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  
  user: User = new User();
  checkContent: boolean = false;
  userCount: number = 0;
  userList: User[]=[];
  form: FormGroup;
  constructor(private http: HttpClient) {
   }
 
  addEmployee()
  { 
    this.userList.push(this.form.value); 
    console.log(this.form.value);
    var formData: any = new FormData();
    formData.append("empId", this.form.get('empId').value);
    formData.append("name", this.form.get('name').value);
    formData.append("salary", this.form.get('salary').value);
    this.http.post('/add', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.form.reset();
    this.checkContent= true ;
    this.userCount=this.userCount + 1; 
  }


  ngOnInit(){
    this.form = new FormGroup({
      empId: new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(7), Validators.pattern('[0-9]*')]),
      name: new FormControl('',[Validators.required, Validators.pattern('[a-zA-z\\s][a-zA-Z\\s]+')]),
      salary: new FormControl('',[Validators.required, Validators.pattern('[0-9]*')])
    })
  }


}
