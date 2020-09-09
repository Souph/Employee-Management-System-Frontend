import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  constructor(private http: HttpClient) { }
  form: FormGroup;
  data: User = new User();
  checkContent = true;
  findEmployee()
  {
    var formdata : any = new FormData();
    formdata.append("empId", this.form.get('empId').value);
    this.http.post<any>('/find/',formdata)
      .subscribe((data: any) => this.data = data)
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      empId: new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(7), Validators.pattern('[0-9]*')])
    })
  }

}
