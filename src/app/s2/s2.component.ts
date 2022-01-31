import { Component, OnInit } from '@angular/core';
import { DemoservService } from '../demoserv.service';
@Component({
  selector: 'app-s2',
  templateUrl: './s2.component.html',
  styleUrls: ['./s2.component.css']
})
export class S2Component implements OnInit {

  constructor(private madhu:DemoservService) { }

  receiveData:any = []

  ngOnInit(): void {

    this.receiveData = this.madhu.possingMsg

  }



// vishwa(){
//   this.madhu.mk();
// }

sendingMsg:any = []
vishwa(srkabil:any){
this.sendingMsg = this.madhu.mk(srkabil);
return this.sendingMsg
}

}
