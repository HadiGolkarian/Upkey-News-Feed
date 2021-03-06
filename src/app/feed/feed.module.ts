import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { FeedRoutingModule } from './feed-routing.module';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { FeedItemComponent } from './feed-item/feed-item.component';
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [UserFeedComponent, FeedItemComponent, FeedComponent],
  imports: [SharedModule, FeedRoutingModule],
})
export class FeedModule {}
