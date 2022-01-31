import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(ngForm:any){
    console.log(ngForm)
  }
// ananth(name:any,age:any){
//   localStorage.setItem("myname is",name)
//   localStorage.setItem("my age is",age)
// }



name:any=""
age: any=""
ananth(){
localStorage.setItem("myname",this.name)
localStorage.setItem("myage",this.age)
}


}
