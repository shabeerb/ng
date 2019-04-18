import { Component, OnInit } from '@angular/core';
import{product} from '../moduls/product';
import { heros } from '../moduls/hero';

 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product:product[];

 public sname= 'shabeer';
 public message = 'Shabeer Message send';
 public person = {
   "fname": "shabeer",
   "lname":"Basha"
 }

public date = new Date();

 heroes = [
       new heros(1, 'Windstorm','sdfsd sdf'),
       new heros(13, 'Bombasto','sdf sdf'),
       new heros(15, 'Magneta','asdfsdf'),
       new heros(20, 'Tornado','ljflsdfjls')
 ]
  myHeros = this.heroes[0];
 
public hasError = true;
public highLight = 'orange';

public titlestyle = {
  color:"blue",
  fontStyle:"italic"
}

  //onclick event
  public greeing = "";

 
  messageEvn (){
    this.greeing = 'Welcome to CodEvolution!'
  }

  fname:string;
  lname:string;
  age:number;
  
  heros = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

  myHero= this.heros[2];

  constructor() { 
     this.fname = "Some text fname";
     this.age = 33;
  }
   

  ngOnInit() {
      this.product = [
        {
          id:1,
          title:'Product name',
          productname:'SCADA',
          capcity:10,
          completed: false
        },
        {
          id:2,
          title:'Product name Two',
          productname:'PLC',
          capcity:10,
          completed: true
        },
        {
          id:3,
          title:'Product name three',
          productname:'WaterSCADA',
          capcity:10,
          completed: false
        },
        {
          id:4,
          title:'Product name four',
          productname:'Soler SCADA',
          capcity:10,
          completed: false
        },
      ]
  }

}

 

 