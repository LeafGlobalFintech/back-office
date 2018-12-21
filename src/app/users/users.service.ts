import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class UsersService {

  users = new BehaviorSubject <object[]>(undefined);

  constructor(
    private http: HttpClient,
  ) { }

  getUsers() {
    this.http.get(
      environment.baseURL + "/users"
    ).subscribe(
      (response) => {
        console.log(response)
        this.users.next(response as any[])
      },
      (error) => {
        console.log(error)
      },
    )
  }


}
