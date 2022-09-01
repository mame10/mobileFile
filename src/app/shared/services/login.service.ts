import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Token, User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

url = 'http://localhost:8000/api/login_check'
 
  constructor(private http : HttpClient) { }

  login(users : User):Observable<Token>{
    return this.http.post<Token>(this.url,users)
    
  }
}
