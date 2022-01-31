import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DemoservService {

  constructor() { }


// rm(){
//   console.log("Hi Hello")
// }



possingMsg:any = []
rm(srmkabil:any){
  // console.log("Hi Hello...." +srmkabil);
  this.possingMsg.push(srmkabil)
  return this.possingMsg
}

// mk(){
//   console.log("Hi Hello Kabilan")
// }


positiveMsg:any = []
mk(srkabil:any){
  //   console.log("Hi Hello Kabilan" +srkabil);
  this.positiveMsg.push(srkabil)
  return this.positiveMsg
  }
  
}
