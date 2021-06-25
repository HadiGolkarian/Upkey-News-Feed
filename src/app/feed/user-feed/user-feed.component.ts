import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserFeedService } from './user-feed.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Feed } from '@app/abstractions/feeds/feed.model';
@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.scss'],
  providers: [UserFeedService],
})
export class UserFeedComponent implements OnInit {
  public $feeds: Observable<Feed[]>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userFeedService: UserFeedService
  ) {}

  ngOnInit(): void {
    this.$feeds = this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.userFeedService.getUserFeeds(id))
    );
  }
}
