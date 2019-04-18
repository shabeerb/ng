import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {id:1,name:'shabeer', age:41,},
      {id:2, name:'elena', age:31,},
      {id:1,name:'shabeer', age:41,},
      {id:2, name:'elena', age:31,},
      {id:1,name:'shabeer', age:41,},
      {id:2, name:'elena', age:31,}
    ]
  }
}
