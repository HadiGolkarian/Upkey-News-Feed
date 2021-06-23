import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { User } from '@abstractions/users/user.model';

import { BaseData } from './../base/base-data';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService extends BaseData<User> {
  constructor(httpClient: HttpClient) {
    super(environment.webApiEndPoints.users, httpClient);
  }
}
