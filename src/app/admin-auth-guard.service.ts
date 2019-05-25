import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

@Injectable()
export class AdminAuthGuard implements CanActivate{
  
  
  constructor(private route : Router , private authService:AuthService) { }
  canActivate(){
    let user = this.authService.currentUser;
    if(user && user.admin)
    return true;

    this.route.navigate(["/no-access"]);
    return false;


  }


}
