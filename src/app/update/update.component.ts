import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  
  constructor(private http: HttpClient) { }
  form: FormGroup;
  data: User = new User();
  checkContent: boolean = false;
  userCount: number = 0;
  userList: User[]=[];
  findEmployee()
  {
    var formdata : any = new FormData();
    formdata.append("empId", this.form.get('empId').value);
    this.http.post<any>('/find/',formdata)
      .subscribe((data: any) => this.data = data)
    this.changeField();
  }

  changeField()
  {
    this.form.setValue({empId: this.form.get('empId').value, name: this.data.name, salary: this.data.salary})
  }
  updateEmployee()
  {
    this.userList.push(this.form.value); 
    console.log(this.form.value);
    var formData: any = new FormData();
    formData.append("empId", this.form.get('empId').value);
    formData.append("name", this.form.get('name').value);
    formData.append("salary", this.form.get('salary').value);
    this.http.post('/update', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.form.reset();
    this.checkContent= true ;
    this.userCount=this.userCount + 1; 
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      empId: new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(7), Validators.pattern('[0-9]*')]),
      name: new FormControl('',[Validators.required, Validators.pattern('[a-zA-z\\s][a-zA-Z\\s]+')]),
      salary: new FormControl('',[Validators.required, Validators.pattern('[0-9]*')])
    })
  }

}
