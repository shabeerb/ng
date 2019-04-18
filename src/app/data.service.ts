import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) {  }

  //  firstC(){
  //   return console.log('clicked new text');
  // }

  // seconddata(){
  //   alert('Some text show');
  // }

  getUsers(){
    return this.http.get('https://reqres.in/api/users');
    //return this.http.get('http://127.0.0.1/test/mock_data.json');
  }

}

