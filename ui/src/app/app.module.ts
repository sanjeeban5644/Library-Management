import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PublishersComponent } from './publishers/publishers.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    SidenavComponent,
    PublishersComponent,
    StudentComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
