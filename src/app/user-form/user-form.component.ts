import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';
import { UsersListComponent } from '../users-list/users-list.component';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(
    private api: ApiHelperService,
    private http: HttpClient,
    private userList: UsersListComponent,
    private tokenStorageService: TokenStorageService
  ) {}

  username : string = this.tokenStorageService.getClickedUser();
  dataSource: any = null;

  ngOnInit() : void {
    const resquest: Observable<any> = this.http.get(('http://localhost:3000/users/').concat(this.username), { observe: 'response' });
    lastValueFrom(resquest).then(response => {
      this.dataSource = response.body;
      console.log(this.dataSource);
    });
  }

}
