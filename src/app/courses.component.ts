

import { Component } from '@angular/core';

import { CoursesService } from './courses.service';
 

@Component({
    selector:'courses',
    template: `<ul><li *ngFor="let course of courses">
                 {{ course }} 
     </li></ul>
        <div>{{ names }}</div>
        <p> {{ com }}</p>
     `
})

export class CoursesComponent {
    title = "list of course";
    courses:any; names:any;
        com:any;
        constructor(services: CoursesService){
            //let services = new CoursesService();
            
            this.courses = services.getCourses();
            this.names = services.getNames();
            this.com = services.compnayName()
            
        }

    // getTitle(){
    //     return this.courses;
    // }

    //logic titely services
}