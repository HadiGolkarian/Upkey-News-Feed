import { Injectable } from '@angular/core';
import { Feed } from '@app/abstractions/feeds/feed.model';
import { FeedsDataService } from '@app/core/dataServices/feeds/feeds-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(public feedDataServce: FeedsDataService) {}

  getFeed(feedId: string): Observable<Feed> {
    return this.feedDataServce.getOne(feedId);
  }
}
