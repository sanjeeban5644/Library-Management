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
import { AddBooksComponent } from './add-books/add-books.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddPublishersComponent } from './add-publishers/add-publishers.component';
import { AddAuthorComponent } from './add-author/add-author.component'


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    AuthorComponent,
    SidenavComponent,
    PublishersComponent,
    StudentComponent,
    AdminComponent,
    AddBooksComponent,
    AddAdminComponent,
    AddStudentComponent,
    AddPublishersComponent,
    AddAuthorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
