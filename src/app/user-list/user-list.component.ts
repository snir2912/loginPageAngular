import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  @Input() user: {userName:string, password:string};
  constructor() {
    this.user={userName:'string', password:'string'};
  }

  ngOnInit(): void {
  }

}
