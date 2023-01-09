import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, lastValueFrom } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})


export class UsersListComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) { }

  displayedColumns: string[] = ['icon', 'id', 'lastname', 'firstname', 'age'];
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
  
  // getId(): number {
  //   console.log("getIdAfter" + this.clickedUser);
  //   return this.clickedUser;
  // }
  
}


