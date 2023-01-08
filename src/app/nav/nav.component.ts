import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import 'bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(
    private service: TokenStorageService,
    private router: Router,
    ){}

  isLogged : boolean = this.service.isLogged()

  logout(): void {
    //console.log("click on logout !");
    this.service.clear();
    this.isLogged = false;
    this.router.navigateByUrl("/login");

  }


}
