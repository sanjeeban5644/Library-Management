import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publishers',
  templateUrl: './publishers.component.html',
  styleUrls: ['./publishers.component.css']
})
export class PublishersComponent implements OnInit {
  title='Publishers Information'
  // publishers = [{ "id": 1,"name": "Build","address": "12C Road",  "phone": 9807,"email": "build@gmail.com"},
  // { "id": 2,"name": "Urban","address": "16N Road",  "phone": 9890,"email": "urban@gmail.com"},
  // { "id": 3,"name": "Faber","address": "89T Road",  "phone": 9866,"email": "faber@gmail.com"}
  //   ]
  publishers: any = [];

  isGreen = true;

   

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchAllPublishers()
  }

  addPublishers(){
   
    console.log("addPublishers button clicked!!")
    this.router.navigateByUrl('/add-publishers')
  }

  fetchAllPublishers(){
    this.http.get("http://localhost:8081/publishers/getAllPublishers")
    .subscribe(resp =>{
      this.publishers = resp;
      console.log('Publishers retrieved successfully:', this.publishers)
    }, error => {
      console.error('Error retrieving publishers:', error);
    });
  }

  deletePublisher(publisherId:Number){
    
    const url = 'http://localhost:8081/publishers/deletePublishers/' +publisherId
    console.log(url)
    this.http.delete(url)
    .subscribe(resp => {
      console.log('Publisher deleted successfully');
      this.fetchAllPublishers()
    }, error => {
      console.error('Error deleting publisher:', error);
    });
  }

}