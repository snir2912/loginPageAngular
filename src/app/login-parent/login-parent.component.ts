import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-login-parent',
  templateUrl: './login-parent.component.html',
  styleUrls: ['./login-parent.component.css']
})
export class LoginParentComponent{
  users = [
    {userName: 'snir', password: 'snir1234'},
    {userName: 'matan', password: 'matan1234'},
  ]

  onUserAdded(user:{userName:string, password:string}){
    this.users.push({
      userName: user.userName,
      password: user.password
    })

}}
