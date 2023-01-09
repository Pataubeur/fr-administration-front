import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom  } from 'rxjs';

@Component({
  selector: 'app-assos-list',
  templateUrl: './assos-list.component.html',
  styleUrls: ['./assos-list.component.css']
})


export class AssosListComponent implements OnInit {
  constructor(
      private http: HttpClient
    ) {}
  displayedColumns: string[] = ['id', 'name'];
  dataSource = [];

  ngOnInit() : void {
    const resquest: Observable<any> = this.http.get('http://localhost:3000/associations', { observe: 'response' });
    lastValueFrom(resquest).then(response => this.dataSource = response.body);
  }

}