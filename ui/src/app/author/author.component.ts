import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title = 'Author Names'
  authors = [{ "id": 1,"name": "Dan Brown","birthDate": "12-09-89",  "nationality": "American"},
  { "id": 2,"name": "Jawaharlal Nehru","birthDate": "24-06-89",  "nationality": "Indian"},
  { "id": 3,"name": "Anna Sewell","birthDate": "19-12-95",  "nationality": "American"},
  { "id": 4,"name": "Arthur Conan Doyle","birthDate": "01-10-94",  "nationality": "American"}  ]
  //books = []

  isGreen = true

  constructor() { }

  ngOnInit(): void {
  }

}
