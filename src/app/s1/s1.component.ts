import { Component, OnInit } from '@angular/core';
import { DemoservService } from '../demoserv.service';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.css']
})
export class S1Component implements OnInit {

  constructor(private srm:DemoservService) { }

  receiveData:any = []

  ngOnInit(): void {

    this.receiveData = this.srm.positiveMsg

  }



  // kabil(){
  //   this.srm.rm();
  // }


sendMsg:any = []
  kabil(srmkabil:any){
    this.sendMsg = this.srm.rm(srmkabil);
    return this.sendMsg
  }


}
