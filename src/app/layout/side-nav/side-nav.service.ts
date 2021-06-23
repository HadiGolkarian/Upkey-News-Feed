import { User } from '@abstractions/users/user.model';
import { Observable } from 'rxjs';
import { UsersDataService } from './../../core/dataServices/users/users-data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any',
})
export class SideNavService {
  constructor(private usersDataService: UsersDataService) {}

  getUsers(): Observable<User> {
    return this.usersDataService.getAll();
  }
}
