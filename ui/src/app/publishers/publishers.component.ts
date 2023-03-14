import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {
  title='Publishers Information'
  publishers = [{ "id": 1,"name": "Build","address": "12C Road",  "phone": 9807,"email": "build@gmail.com"},
  { "id": 2,"name": "Urban","address": "16N Road",  "phone": 9890,"email": "urban@gmail.com"},
  { "id": 3,"name": "Faber","address": "89T Road",  "phone": 9866,"email": "faber@gmail.com"}
    ]

  isGreen = true;

  constructor() { }

  ngOnInit(): void {
  }

}
