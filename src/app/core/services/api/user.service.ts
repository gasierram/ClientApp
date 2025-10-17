import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://localhost:7251/api/users';

  constructor(private http: HttpClient) { }

  getUserById(id:string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl)
  }
}
