import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoservService {

  constructor() { }


  name = "";
  db(myname:any){
    console.log("hiii" +myname)
    this.name = myname;

  }
}
