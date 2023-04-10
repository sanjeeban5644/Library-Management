import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { PublishersComponent } from './publishers/publishers.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { AddBooksComponent } from './add-books/add-books.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
