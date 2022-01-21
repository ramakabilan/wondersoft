import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  // Login(uname:string,upass:string){
  //   localStorage.setItem('MyName',uname)
  //   localStorage.setItem('MyPass',upass)
  // }
  // Signin(uname:string,upass:string){
  //   if(uname == localStorage.getItem("MyName") && upass == localStorage.getItem("MyPass")){
  //     this.router.navigate(['./home'])
  //   }
  //   else{
  //     alert('pls enter the valid email & pass')
  //   }
  // }

  // myimage="../../assets/srm-logo-white.png";
  // myusername:any
}
