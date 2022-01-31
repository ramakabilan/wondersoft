import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deposit-calculator',
  templateUrl: './deposit-calculator.component.html',
  styleUrls: ['./deposit-calculator.component.css']
})
export class DepositCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }


  total1: any = 0;
  total2: any = 0;
  calculateValue(investAmount: any, durations: any, interest: any) {
    this.total1 = (investAmount * interest * durations / 100);
    this.total2 = Math.round(investAmount*((1 + interest/100)*durations - 1));
     
  }


}
