import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivesdemo',
  templateUrl: './directivesdemo.component.html',
  styleUrls: ['./directivesdemo.component.css']
})
export class DirectivesdemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    mycondition:true;

  }

  fruits:Array<string>=["Apple","Banana","Cikku","PineApple"];

  addfruit(fruit:any){
    this.fruits.push(fruit)
    this.fruits.reverse()
  }

  days:Array<string>=["Sunday","Moday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

  myval=3;



  
  clr: string = "green";
  bgc: string = "blue";


  selected = {
    name: 'green',
    color: 'green'
  }


  data = [{
    name: 'blue',
    color: 'blue'
  }, {
    name: 'green',
    color: '#008000'
  }, {
    name: 'red',
    color: 'red'
  }, {
    name: 'yellow',
    color: 'yellow'
  }]

  compareObjects(o1: any, o2: any): boolean {
    return o1.color === o2.color
  }

}



