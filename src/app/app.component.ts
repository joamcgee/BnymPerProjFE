import { Component, Input, OnInit } from '@angular/core';
import { UsersModel } from 'src/model/UserModel';
import { UserServiceService } from 'src/service/user-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Engineering Team';

  allUsers : UsersModel[] = []
  
  
  //we have to declare an instance of the service class to inject user-service method to be used
  constructor(private service: UserServiceService) {}


  ngOnInit(): void {
    this.getAllUsers();
    
  }
  
  
  getAllUsers() {
    this.service.getUsers().subscribe((user) => {
      this.allUsers = user;
      console.log(user);
    });
  }
}


