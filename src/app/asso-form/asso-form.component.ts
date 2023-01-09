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
    private userList: UsersListComponent,
    private assosList: AssosListComponent,
    private http: HttpClient
  ) { }

  username : string = this.tokenStorageService.getClickedUser();
  dataSourceUser: any = null;
  userAssociations: string[] = [];

  ngOnInit() : void {
    const resquestUser: Observable<any> = this.http.get(('http://localhost:3000/users/').concat(this.username), { observe: 'response' });
    lastValueFrom(resquestUser).then(response => {
      this.dataSourceUser = response.body;
    });
    let dataSourceAssociation : any =  null;
    const resquestAssociation: Observable<any> = this.http.get(('http://localhost:3000/associations/'), { observe: 'response' });
    lastValueFrom(resquestAssociation).then(response => {
      dataSourceAssociation = response.body;
      for(let i = 0 ; i < dataSourceAssociation.length ; i++) {
        console.log(dataSourceAssociation[i].users[0].id);
        for(let j = 0 ; j < dataSourceAssociation[i].users.length ; j++) {

          if(dataSourceAssociation[i].users[j].id === +(this.username)) {
            this.userAssociations.push(dataSourceAssociation[i].name);
          }

        }
      }
      console.log(this.userAssociations);
      
    });
  }
}

