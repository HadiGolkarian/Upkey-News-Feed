import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Feed } from '@abstractions/feeds/feed.model';
import { BaseData } from './../base/base-data';

@Injectable({
  providedIn: 'root',
})
export class FeedsDataService extends BaseData<Feed> {
  constructor(httpClient: HttpClient) {
    super(environment.webApiEndPoints.feeds, httpClient);
  }
}
