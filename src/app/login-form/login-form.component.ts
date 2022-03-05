import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
  @Output() AddUser = new EventEmitter<{userName:string, password:string}>();

  onAddUser(userName:string, password:string):void{
    this.AddUser.emit({
      userName: userName,
      password: password,
    });
}}
