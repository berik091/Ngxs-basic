import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetUsers } from 'src/app/actions/user.action';
import { User } from 'src/app/models/User';
import { UserState } from 'src/app/states/user.state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  @Select(UserState.getUserList) users: Observable<User[]>;
  
  constructor(private store:Store) { }
  ngOnInit(){
    this.store.dispatch(new GetUsers());
  }

}
