import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feed } from '@app/abstractions/feeds/feed.model';
import { of } from 'rxjs';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { UserFeedService } from './user-feed.service';
@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.scss'],
  providers: [UserFeedService],
})
export class UserFeedComponent implements OnInit {
  public feeds: Feed[];
  public currentId: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userFeedService: UserFeedService
  ) {}

  handleBookmarkChane(e: { feed: Feed; bookmakred: boolean }): void {
    this.userFeedService
      .updateBookmarkStatus(e.feed, e.bookmakred)
      .pipe(
        catchError((err) => {
          return of('an error has occurred');
        })
      )
      .subscribe((res) => {
        const updatedIndex = this.feeds.findIndex(
          (feed) => feed.id === e.feed.id
        );
        // update locally
        this.feeds[updatedIndex].isBookmarked = e.bookmakred;
      });
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        tap(({ id }) => {
          this.currentId = id;
        }),
        switchMap(({ id }) => this.userFeedService.getUserFeeds(id))
      )
      .subscribe((feeds) => {
        this.feeds = feeds;
      });
  }
}
