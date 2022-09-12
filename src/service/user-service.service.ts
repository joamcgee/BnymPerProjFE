import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';
import { UsersModel } from 'src/model/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  baseUrl = "http://localhost:8080/api/user"

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<UsersModel[]>(`${this.baseUrl}/getUsers`)
      
      }

  }

 // getFirstName(){ }

 // getLastName(){ }

//  getUserID(){}

