import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService{

  constructor(private http:HttpClient ) { }

  getUsers() {
    const apiUrl = "https://dummyjson.com/users";
    return this.http.get<any>(apiUrl)
  }
}
