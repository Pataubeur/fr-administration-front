import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Observable, lastValueFrom } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiHelperService } from '../services/api-helper.service';
import { AssosListComponent } from '../assos-list/assos-list.component';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-asso-form',
  templateUrl: './asso-form.component.html',
  styleUrls: ['./asso-form.component.css']
})
export class AssoFormComponent {

  constructor(
    private api: ApiHelperService,
    private tokenStorageService: TokenStorageService,
    private http: HttpClient
  ) { }

  username : string = this.tokenStorageService.getClickedAssociation();
  dataSourceAsso: any = null;
  userInAssociation : any = [];
  notExisting : boolean = false


  ngOnInit() : void {
    const resquestAsso: Observable<any> = this.http.get(('http://localhost:3000/associations/').concat(this.username), { observe: 'response' });
    lastValueFrom(resquestAsso).then(response => {
      this.dataSourceAsso = response.body;
      this.userInAssociation = this.dataSourceAsso.users;
    }).catch(response => {
      if(response.status==404) {
        this.notExisting = true
        console.log(this.notExisting)
      }
    });
  }
}

