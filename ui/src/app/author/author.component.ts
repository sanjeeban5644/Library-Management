import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  title = 'Author Management'
  
// authors = [{ "id": 1,"name": "Dan Brown","birthDate": "12-09-89",  "nationality": "American"},
  // { "id": 2,"name": "Jawaharlal Nehru","birthDate": "24-06-89",  "nationality": "Indian"},
  // { "id": 3,"name": "Anna Sewell","birthDate": "19-12-95",  "nationality": "American"},
  // { "id": 4,"name": "Arthur Conan Doyle","birthDate": "01-10-94",  "nationality": "American"}  ]
  //books = []
  authors: any = [];

  isGreen = true
  

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllAuthors()
  }

  addAuthors(){
   
    console.log("addAuthors button clicked!!")
    this.router.navigateByUrl('/add-author')
  }

  fetchAllAuthors(){
    this.http.get("http://localhost:8081/authors/getAllAuthors")
    .subscribe(resp =>{
      this.authors = resp;
      console.log('Authors retrieved successfully:', this.authors)
    }, error => {
      console.error('Error retrieving authors:', error);
    });
  }

  deleteAuthor(authorId:Number){
    
    const url = 'http://localhost:8081/authors/deleteAuthors/' +authorId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Author deleted successfully');
      this.fetchAllAuthors()
    }, error => {
      console.error('Error deleting author:', error);
    });
  }

}






// authors = [{ "id": 1,"name": "Dan Brown","birthDate": "12-09-89",  "nationality": "American"},
  // { "id": 2,"name": "Jawaharlal Nehru","birthDate": "24-06-89",  "nationality": "Indian"},
  // { "id": 3,"name": "Anna Sewell","birthDate": "19-12-95",  "nationality": "American"},
  // { "id": 4,"name": "Arthur Conan Doyle","birthDate": "01-10-94",  "nationality": "American"}  ]
  //books = []