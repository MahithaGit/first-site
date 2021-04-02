import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
	firstname:string;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
onSubmit(formData:NgForm){
	this.http.post("https://first-app-bb3d9-default-rtdb.firebaseio.com/formdata.json",formData).subscribe();
}
}