import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  title='Admin Management'
  admins = [{ "id": 1,"name": "SM","username":"san02","password":"add990#$"},
  { "id": 2,"name": "KL","username":"lk003","password":"jjk87@@3"},
  { "id": 3,"name": "PS","username":"ps776","password":"lkeer44$$3"},
  { "id": 4,"name": "RT","username":"rt550","password":"tuq&65@com"},
]


  isGreen = true;

  constructor() { }

  ngOnInit(): void {
  }

}
