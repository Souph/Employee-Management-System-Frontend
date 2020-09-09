import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InsertComponent } from './insert/insert.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { FindComponent } from './find/find.component';
import { ViewallComponent } from './viewall/viewall.component';
import { UpdateFillComponent } from './update-fill/update-fill.component';

const ROUTES:Routes = [
  {path:'insert' , component: InsertComponent},
  {path:'delete' , component: DeleteComponent},
  {path:'update' , component: UpdateComponent},
  {path:'find' , component: FindComponent},
  {path:'viewall' , component: ViewallComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InsertComponent,
    DeleteComponent,
    UpdateComponent,
    FindComponent,
    ViewallComponent,
    UpdateFillComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
