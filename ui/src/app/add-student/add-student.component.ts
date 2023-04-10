import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder , FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentsComponent implements OnInit {
  studentsForm : FormGroup;
  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router ) { 
    this.studentsForm = this.formbuilder.group({
      name: ['', Validators.required],
      dept: [],
      roll: [],
      mobile: [],
      dob: [],
    })
  }

  ngOnInit(): void {
  }

  saveStudent(){    
    let studentData = this.studentsForm.value;
    // Handle date to string
    this.http.post('http://localhost:8081/students/saveStudents',studentData)
    .subscribe(response => {
      console.log('Student saved to DB', response)
      this.router.navigateByUrl('/student')
    }, error =>{
      console.error("Error in student save", error)
    }
    );

  }

  



}
