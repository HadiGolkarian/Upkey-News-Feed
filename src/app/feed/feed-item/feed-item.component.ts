import { Component, Input, OnInit } from '@angular/core';
import { Feed } from '@app/abstractions/feeds/feed.model';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit {
  @Input() feed: Feed;

  constructor() {}

  ngOnInit(): void {}
}
