import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { UserFeedComponent } from './user-feed/user-feed.component';


@NgModule({
  declarations: [UserFeedComponent],
  imports: [
    CommonModule,
    FeedRoutingModule
  ]
})
export class FeedModule { }
