import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, lastValueFrom } from 'rxjs';
import { ApiHelperService } from '../services/api-helper.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})


export class UsersListComponent implements OnInit {
  constructor(
    private api: ApiHelperService,
    private http: HttpClient,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) { }

  displayedColumns: string[] = ['icon', 'id', 'lastname', 'firstname', 'age', 'bin'];
  dataSource = [];
  
  ngOnInit(): void {
    const resquest: Observable<any> = this.http.get('http://localhost:3000/users', { observe: 'response' });
    lastValueFrom(resquest).then(response => this.dataSource = response.body);
  }

  goToUserForm(id: number) : void {
    console.log("id" + id)
    this.tokenStorageService.saveClickedUser(id.toString());
    this.router.navigateByUrl('/user-form');
  }

  deleteUser(id: number) : void {
    this.api.delete({endpoint:('/users/'.concat(id.toString()))}).then(() => window.location.reload());;
    console.log("Trying to delete");
  }
  
  // getId(): number {
  //   console.log("getIdAfter" + this.clickedUser);
  //   return this.clickedUser;
  // }
  
}


