import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'https://gorest.co.in/public-api/users';

  constructor(private http:HttpClient) { }

  getUsers(){
    let temp = this.http.get(this.baseUrl).pipe(map((data:any) => data.data));
    console.log(temp);
    return temp;
  }
}
