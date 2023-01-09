import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Observable, lastValueFrom  } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiHelperService } from '../services/api-helper.service';

@Component({
  selector: 'app-asso-form',
  templateUrl: './asso-form.component.html',
  styleUrls: ['./asso-form.component.css']
})
export class AssoFormComponent{

  constructor(
    private api: ApiHelperService,
    private tokenStorageService: TokenStorageService,
    private http: HttpClient
  ) {}

  username : string = this.tokenStorageService.getName();
  dataSource: any = null;

  ngOnInit() : void {
    console.log(this.dataSource);
    const resquest: Observable<any> = this.http.get(('http://localhost:3000/users/').concat(this.username), { observe: 'response' });
    lastValueFrom(resquest).then(response => {
      this.dataSource = response.body;
    });
  }

  giveMeUser() : void {
    console.log(this.dataSource);
    const resquest: Observable<any> = this.http.get(('http://localhost:3000/users/').concat(this.username), { observe: 'response' });
    console.log(resquest);

    lastValueFrom(resquest).then(response => {
      this.dataSource = response.body;
    });
    
  }
}