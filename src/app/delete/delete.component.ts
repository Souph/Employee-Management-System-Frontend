import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private http: HttpClient) { }
  form: FormGroup;
  userCount: number = 0;
  checkContent: boolean = false;
  deleteEmployee()
  {
    var formdata : any = new FormData();
    formdata.append("empId", this.form.get('empId').value);
    this.http.post<any>('/delete/',formdata).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
    this.form.reset();
    this.checkContent= true ;
    this.userCount=this.userCount + 1; 
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      empId: new FormControl('',[Validators.required, Validators.minLength(7), Validators.maxLength(7), Validators.pattern('[0-9]*')])
    })
  }

}
