import { UserFeedComponent } from './user-feed/user-feed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {
    path: ':id',
    component: UserFeedComponent,
    children: [
      {
        path: 'feed/:feedId',
        component: FeedComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeedRoutingModule {}
