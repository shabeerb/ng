import { Component, OnInit } from '@angular/core';
import { project, meters, employee } from '../moduls/project';




@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  displayName = false; //if conditions

  //if block

    employee:employee[];
   

   meters:meters[];
 
  public usernameof:string; 
  public age:number;
  public publicissue:boolean;

  


  constructor() { 
    this.usernameof = 'shabeer';
    this.age = 19; this.publicissue = true;
  }

 
  ngOnInit() {
    
    
         this.meters = [
          {
            va:1,
            kva:232,
            kw:989,
            active:10,
            brstaus:"Open"
          },
          {
            va:12,
            kva:2332,
            kw:9389,
            active:120,
            brstaus:"Close"
          },
          {
            va:17,
            kva:232,
            kw:989,
            active:10,
            brstaus:"Open"
          },
          {
            va:18,
            kva:532,
            kw:109,
            active:15,
            brstaus:"close"
          },
          {
            va:988,
            kva:532,
            kw:109,
            active:15,
            brstaus:"copenlose"
          },
          {
            va:988,
            kva:5332,
            kw:109,
            active:15,
            brstaus:"copenlose"
          },
         ]

    //employee details
    this.employee = [
        {id:1,name:'shabeer', age:41,},
        {id:2, name:'elena', age:31,},
    ]
    //end the employee details
 
  }
  
}
