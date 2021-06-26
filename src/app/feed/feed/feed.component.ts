import { Feed } from '@app/abstractions/feeds/feed.model';
import { Observable } from 'rxjs';
import { FeedService } from './feed.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
  providers: [FeedService],
})
export class FeedComponent implements OnInit {
  public $feed: Observable<Feed>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private feedService: FeedService
  ) {}

  ngOnInit(): void {
    this.$feed = this.activatedRoute.params.pipe(
      switchMap(({ feedId }) => this.feedService.getFeed(feedId))
    );
  }
}
