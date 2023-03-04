import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formgroup:any;
  info:any = "";
  information:any = [];
 
  constructor(private router:Router ){}
  ngOnInit(): void {
     this.formgroup = new FormGroup({
      name:new FormControl(""),
      adharcardno: new FormControl(""),
      mobileno:new FormControl("")
     });
  }
  submit(data:any){

    this.info=data
     this.information.push(this.info)
    console.log(this.information);

    this.formgroup = new FormGroup({
      name:new FormControl(""),
      adharcardno: new FormControl(""),
      mobileno:new FormControl("")
     });
     localStorage.setItem("Data",JSON.stringify(this.information))
    


  }
}
