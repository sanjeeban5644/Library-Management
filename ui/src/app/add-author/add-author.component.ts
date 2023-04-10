import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-authors',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorsComponent implements OnInit {
  authorsForm : FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router ) { 
    this.authorsForm = this.formbuilder.group({
      name: ['', Validators.required],
      birthDate: [],
      nationality: []
    })
  }

  ngOnInit(): void {
  }

  saveAuthor(){    
    let authorData = this.authorsForm.value;
    this.http.post('http://localhost:8081/authors/saveAuthors',authorData)
    .subscribe(response => {
      console.log('Author saved to DB', response)
      this.router.navigateByUrl('/author')
    }, error =>{
      console.error("Error in author save", error)
    }
    );

  }

  



}

