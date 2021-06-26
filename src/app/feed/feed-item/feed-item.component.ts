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

  handleBookmark(e, bookmakred: boolean): void {
    e.preventDefault();
    e.stopPropagation();
  }

  getThumbUrl(): string {
    switch (this.feed.type) {
      case FeedType.addedFriend:
        return this.feed.subject.profileImageUrl;
      case FeedType.like:
        return this.feed.thumbUrl;
      case FeedType.upload:
        return this.feed.uploadedPhotoThumbUrl;
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
