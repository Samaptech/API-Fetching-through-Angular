import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {

  constructor(private http:HttpClient ) { }

  ngOnInit() {
    const apiUrl = "https://dummyjson.com/users";
    return this.http.get(apiUrl)
  }
}
