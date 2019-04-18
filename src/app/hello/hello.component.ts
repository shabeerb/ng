import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  interpolition = 'some inter';
  i = 0; 
  
  sometext= "Valuehere"
   

  constructor() { 
    this.sometext = ""

    setInterval(() => {
      this.sometext = Math.random().toString()
    },60)
  }

  htask(){
    console.log(`called ${this.i++} Time`)

  }

  ngOnInit() {
 
  }

}
