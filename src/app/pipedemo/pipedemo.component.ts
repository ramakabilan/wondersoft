import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

str:string = "hi hello every body just for demo"
d1 = new Date();
amount:number = 12345678;
emp = {'name':'kabilan','age':24}
}
