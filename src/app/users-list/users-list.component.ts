import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom  } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})


export class UsersListComponent implements OnInit {
  constructor(
      private http: HttpClient
    ) {}

  displayedColumns: string[] = ['id', 'lastname', 'firstname', 'age'];
  dataSource = [];

  ngOnInit() : void {
    const resquest: Observable<any> = this.http.get('http://localhost:3000/users', { observe: 'response' });
    lastValueFrom(resquest).then(response => this.dataSource = response.body);
  }

}

