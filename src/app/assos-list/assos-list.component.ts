import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom  } from 'rxjs';
import { ApiHelperService } from '../services/api-helper.service';

@Component({
  selector: 'app-assos-list',
  templateUrl: './assos-list.component.html',
  styleUrls: ['./assos-list.component.css']
})


export class AssosListComponent implements OnInit {
  constructor(
      private http: HttpClient,
      private api: ApiHelperService
    ) {}
  displayedColumns: string[] = ['id', 'name', 'bin'];
  dataSource = [];

  ngOnInit() : void {
    const resquest: Observable<any> = this.http.get('http://localhost:3000/associations', { observe: 'response' });
    lastValueFrom(resquest).then(response => this.dataSource = response.body);
  }

  deleteAssociation(id: number) : void {
    this.api.delete({endpoint:('/associations/'.concat(id.toString()))}).then(() => window.location.reload());;
    console.log("Trying to delete");
  }

}