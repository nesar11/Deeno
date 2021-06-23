import { Component, OnInit } from '@angular/core';
import { User} from '../../../models/User';
import {AuthService} from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  users: User[];
  constructor( private as: AuthService, private http : HttpClient) { }

  ngOnInit(): void {
    this.as.getUser().subscribe((data: User[]) => {
      this.users = data;
      console.log(data)
    })
  }

}
