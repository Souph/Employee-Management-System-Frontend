import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewall',
  templateUrl: './viewall.component.html',
  styleUrls: ['./viewall.component.css']
})
export class ViewallComponent implements OnInit {

  constructor(private http: HttpClient,) { }
  checkContent = true;
  data=[];
  showAll()
  {
    this.http.get('/view')
    .subscribe((data: any[]) => this.data = data);
    this.checkContent=true;
  }

  ngOnInit(): void {
    this.showAll();
  }

}
