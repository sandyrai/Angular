import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   username='';
   password='';
   errormessage='Invalid Credentials';
   invalidLogin =false;

//Router
//Anglar Dependency injection

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    
    if(this.username==='admin' && this.password==='admin'){
      this.router.navigate(['welcome',this.username]);
      this.invalidLogin=false;
      
    }
    else{
      this.invalidLogin=true;
    }
  }

}
