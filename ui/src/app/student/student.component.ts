import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title = 'Students Management'
//   students = [{ "id": 1,"name": "Ethan","dept": "CSE",  "roll": 10,"dob": "10-09-03","mobile": "9010"},
//   { "id": 2,"name": "Emma","dept": "ECE",  "roll": 11,"dob": "11-09-06","mobile": "9341"},   
//   { "id": 3,"name": "Andrew","dept": "IT",  "roll": 12,"dob": "22-12-09","mobile": "9912"}, 
//   { "id": 4,"name": "Amilia","dept": "EE",  "roll": 13,"dob": "08-01-99","mobile": "9445"},
// ]
  students: any = [];

  isGreen = true
  

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllStudents()
  }

  addStudents(){
   
    console.log("addStudents button clicked!!")
    this.router.navigateByUrl('/add-student')
  }

  fetchAllStudents(){
    this.http.get("http://localhost:8081/students/getAllStudents")
    .subscribe(resp =>{
      this.students = resp;
      console.log('Students retrieved successfully:', this.students)
    }, error => {
      console.error('Error retrieving students:', error);
    });
  }

  deleteStudent(studentId:Number){
    
    const url = 'http://localhost:8081/students/deleteStudents/' +studentId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Student deleted successfully');
      this.fetchAllStudents()
    }, error => {
      console.error('Error deleting student:', error);
    });
  }

}





