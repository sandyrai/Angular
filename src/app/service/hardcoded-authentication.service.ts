import { Injectable } from '@angular/core';

//service i can inject this any place i want to use
@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticateUser(username:string,password:string){
    if(username==='admin' && password==='admin'){
      sessionStorage.setItem('autheticateUser',username);
      return true;
    }
    else{
      return false;
    }
  }

   isUserLoggedIn(){
     let user=sessionStorage.getItem('autheticateUser');
     return !(user == null)
   }

   logout(){
     sessionStorage.removeItem('autheticateUser');
   } 

}
