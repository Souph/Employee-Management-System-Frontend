import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  gotoInsert()
  {
    this.router.navigate(['/insert']);
  }

  gotoDelete()
  {
    this.router.navigate(['/delete']);
  }

  gotoUpdate()
  {
    this.router.navigate(['/update']);
  }

  gotoFind()
  {
    this.router.navigate(['/find']);
  }

  gotoViewAll()
  {
    this.router.navigate(['/viewall']);
  }
  
  

  ngOnInit(): void {
  }

}
