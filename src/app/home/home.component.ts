import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

   h2style: boolean = false;
   h1Style: boolean = false;
   vlanumber: number;
  

  
  users:Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      //console.log(this.users)
    });

  }

  firstclick(){
    console.log("Clickhere Testing");
    this.h2style= true;
    //this.data.firstC();
  }

 

  stylec(){
    this.h1Style = true;
  }

  
 
}
