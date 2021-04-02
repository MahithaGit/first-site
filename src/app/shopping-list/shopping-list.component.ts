import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  sendData(postData:{name:string, amount:number}){
    this.http.post('https://first-app-bb3d9-default-rtdb.firebaseio.com/data.json',postData)
    .subscribe(responseData=>{
      console.log(responseData);
    });
    }

  getData(){
    return this.http.get('https://first-app-bb3d9-default-rtdb.firebaseio.com/data.json')
    .pipe(
      map(responseData=>{
        console.log(responseData);
      }
        )
      
      );
  }
}
