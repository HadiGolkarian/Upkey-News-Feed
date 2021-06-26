import { Injectable } from '@angular/core';
import { Feed } from '@app/abstractions/feeds/feed.model';
import { FeedsDataService } from '@app/core/dataServices/feeds/feeds-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class UserFeedService {
  constructor(private feedsDataService: FeedsDataService) {}

  getUserFeeds(userId: string): Observable<Feed[]> {
    return this.feedsDataService.getAll({
      params: {
        ownerId: userId,
      },
    });
  }

  updateBookmarkStatus(feed: Feed, bookmakred: boolean): Observable<Feed> {
    return this.feedsDataService.update(feed.id.toString(), {
      ...feed,
      isBookmarked: bookmakred,
    });
  }
}
