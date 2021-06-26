import { Component, Input, OnInit } from '@angular/core';
import { FeedType } from '@app/abstractions/feeds/feed-type.enum';
import { Feed } from '@app/abstractions/feeds/feed.model';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit {
  @Input() feed: Feed;

  constructor() {}

  getFeedDescription(): string {
    switch (this.feed.type) {
      case FeedType.addedFriend:
        return `${this.feed.owner.firstName} ${this.feed.owner.lastName} added ${this.feed.subject.firstName} ${this.feed.subject.lastName} as a firend.`;
      case FeedType.like:
        return `${this.feed.owner.firstName} ${this.feed.owner.lastName} liked ${this.feed.subject.firstName} ${this.feed.subject.lastName} post.`;
      case FeedType.upload:
        return `${this.feed.owner.firstName} ${this.feed.owner.lastName} uploaded a new image.`;
      default:
        return '';
    }
  }

  getIconClass(): string {
    switch (this.feed.type) {
      case FeedType.addedFriend:
        return 'fas fa-user-plus';
      case FeedType.like:
        return 'fas fa-thumbs-up';
      case FeedType.upload:
        return 'fas fa-cloud-upload-alt';
      default:
        return '';
    }
  }

  ngOnInit(): void {}
}
