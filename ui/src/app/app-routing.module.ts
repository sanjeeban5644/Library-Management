import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { PublishersComponent } from './publishers/publishers.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { AddAdminsComponent } from './add-admin/add-admin.component';
import { AddAuthorsComponent } from './add-author/add-author.component';
import { AddPublishersComponent } from './add-publishers/add-publishers.component';
import { AddStudentsComponent } from './add-student/add-student.component';

const routes: Routes = [
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path : 'author',
    component: AuthorComponent,
  },
  {
    path : 'publishers',
    component: PublishersComponent,
  },
  {
    path : 'student',
    component: StudentComponent,
  },
  {
    path : 'admin',
    component: AdminComponent,
  },
  {
    path : 'add-books',
    component: AddBooksComponent
  },
  {
    path : 'add-admin',
    component: AddAdminsComponent
  },
  {
    path: 'add-author',
    component: AddAuthorsComponent
  },
  {
    path: 'add-publishers',
    component: AddPublishersComponent
  },
  {
    path: 'add-student',
    component: AddStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
