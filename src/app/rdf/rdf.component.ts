import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.css']
})
export class RDFComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
loginForm = new FormGroup({
email:new FormControl('',Validators.required),
pass:new FormControl('',[Validators.required,Validators.minLength(6)])
})

getEmail(){
return this.loginForm.controls;
}

getpass(){
  return this.loginForm.controls;
  }
}
