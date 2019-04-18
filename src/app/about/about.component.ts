import { Component, OnInit } from '@angular/core';
import { OnDestroy, AfterContentInit } from '@angular/core';
import { aboutus } from '../moduls/aboutus';

 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  aboutus:aboutus[];

  public intername = "shabeer";
  public successClass= "text-success";

  public haserror = true;
  public isspecial = true;

  public heightColor = "orange";

  public messageClass={
    "text-success": !this.haserror,
    "text-danger":this.haserror,
    "text-special": this.isspecial

  }

public titleStyle = {
  color:"pink", 
  fontStyle: "italic"
}

  public siteurl = window.location.href;
  public myid = "testId";

  constructor() { 
     console.log('constructor')
  }

  ngOnInit() {

    console.log('Initsdfsdf')
    this.aboutus=[
      {
        id:1,
        personname:'satyam',
        age:33
      },
      {
        id:2,
        personname:'satyam',
        age:33
      },
    ]
  }
      getName(){
      return "Hello GetName " + this.intername;
    }

    ngOnDestroy(){
      console.log('Destroyd')
    }

    ngAfterContentInit(){
      console.log('AfterContent')
    }
}




 