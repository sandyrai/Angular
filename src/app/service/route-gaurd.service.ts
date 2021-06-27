import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate{

  constructor(private hardcodeAuthService:HardcodedAuthenticationService,
    private router:Router
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodeAuthService.isUserLoggedIn())
    {
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false; 
    }
      
     
  }

}
