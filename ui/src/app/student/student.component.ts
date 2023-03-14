import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  title='Students Information'
  students = [{ "id": 1,"name": "Ethan","dept": "CSE",  "roll": 10,"dob": "10-09-03","mobile": "9010"},
  { "id": 2,"name": "Emma","dept": "ECE",  "roll": 11,"dob": "11-09-06","mobile": "9341"},   
  { "id": 3,"name": "Andrew","dept": "IT",  "roll": 12,"dob": "22-12-09","mobile": "9912"}, 
  { "id": 4,"name": "Amilia","dept": "EE",  "roll": 13,"dob": "08-01-99","mobile": "9445"},
]

  isGreen = true;

  constructor() { }

  ngOnInit(): void {
  }

}
