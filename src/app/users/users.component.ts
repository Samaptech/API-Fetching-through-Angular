import { Component ,OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: any[] = [];
  constructor(private userService:UsersService){

  }
  ngOnInit(){
    this.userService.ngOnInit().subscribe(
      (response)=>{
        this.user = response.users;
      },
      (error)=>{
        console.log("error fetching data")
      }

    );

  }

}
