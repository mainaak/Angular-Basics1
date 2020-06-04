import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-component',
  templateUrl: './date-component.component.html',
  styleUrls: ['./date-component.component.css']
})
export class DateComponentComponent implements OnInit {

  // dateString: String;
  milliseconds: String;

  constructor() {

    // setInterval(() => {
    //   let currentDate = new Date();
    //   this.dateString = currentDate.toDateString() + ' ' + currentDate.toLocaleTimeString();
    // }, 1000); 

    setInterval(() => {
      this.milliseconds = new Date().toUTCString();
    }, 1000);

  }

  addNumbers(num1 : number, num2 : number){
    return num1 + num2;
  }

  ngOnInit(): void {
  }

}
