import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  // isUserLoggedIn:boolean=false;
  constructor(public hardcodedAuthenticationSerivce:HardcodedAuthenticationService
    
    ) {
      console.log("inside menu");
     }

  ngOnInit(): void {
    // this.isUserLoggedIn=this.hardcodedAuthenticationSerivce.isUserLoggedIn();
    // console.log(this.isUserLoggedIn);
  }

}
