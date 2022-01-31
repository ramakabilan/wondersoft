import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  emi :any;
  interest:any;
  amount: any;
  months: any;
  rate: any;
  total:any;


  
  calculateResult (pAmount:string, durations:string, loanType:string){
    console.log(pAmount, durations, loanType);
    this.emi = 0;
    this.amount = parseFloat(pAmount);
    this.months = parseFloat(durations);
    this.rate = parseFloat(loanType);
    this.interest = (this.amount * (this.rate * 0.01)) / this.months;
    this.emi = ((this.amount / this.months) + this.interest);
    this.total = (this.interest + this.emi + this.amount);


  }

 
  calculateReset(){
    this.amount='';
    this.months='';
    this.rate='';
    this.emi='';
    this.total='';
    this.interest='';

  }
  
}
