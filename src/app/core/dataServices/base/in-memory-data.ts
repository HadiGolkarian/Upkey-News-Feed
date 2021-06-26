import { Feed } from '@abstractions/feeds/feed.model';
import { User } from '@abstractions/users/user.model';
import { Injectable } from '@angular/core';
import { FeedType } from '@app/abstractions/feeds/feed-type.enum';
import { NumberUtilsService } from '@app/core/utils/number-utils.service';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root',
})
export class InMemoryData implements InMemoryDbService {
  constructor(private numberUtils: NumberUtilsService) {}

  createDb(): { users: User[]; feeds: Feed[] } {
    // ----------------------------------------
    // create fake user Ids
    const userIds = [];
    for (let i = 0; i < 10; i++) {
      userIds.push(i);
    }
    // create fake users
    const users: User[] = userIds.map((id) => ({
      id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      profileImageUrl: faker.image.avatar(),
    }));

    // ----------------------------------------
    // create fake feed Ids
    const feedIds = [];
    for (let i = 0; i < 100; i++) {
      feedIds.push(i);
    }
    const availableFeedTypes = [
      FeedType.addedFriend,
      FeedType.like,
      FeedType.upload,
    ];

    // create fake feeds
    const feeds: Feed[] = feedIds.map((id) => {
      const feedType =
        availableFeedTypes[this.numberUtils.randomIntFromTo(0, 2)];
      const feedOwner = this.numberUtils.randomIntFromTo(0, 9);
      const feedSubject = this.numberUtils.randomIntFromTo(0, 9);

      return {
        id,
        createdAt: faker.date.past(1),
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraphs(
          this.numberUtils.randomIntFromTo(0, 25)
        ),
        ownerId: feedOwner,
        owner: users[feedOwner],
        type: feedType,
        subjectId: feedSubject,
        subject: users[feedSubject],
        coverUrl: faker.image.imageUrl(600, 400, null, true),
        thumbUrl: faker.image.imageUrl(100, 100, null, true),
        uploadedPhotoUrl:
          feedType === FeedType.upload
            ? faker.image.imageUrl(600, 400, 'abstrat', true)
            : null,
        uploadedPhotoThumbUrl:
          feedType === FeedType.upload
            ? faker.image.imageUrl(100, 100, 'abstrat', true)
            : null,
      };
    });

    console.log(users, feeds);

    return { users, feeds };
  }
}
