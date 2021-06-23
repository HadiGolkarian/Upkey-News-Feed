import { User } from '@abstractions/users/user.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as faker from 'faker';

export class InMemoryData implements InMemoryDbService {
  constructor() {}

  createDb(): { users: User[] } {
    // ----------------------------------------
    // create fake user Ids
    const userIds = [];
    for (let i = 0; i < 10; i++) {
      userIds.push(i);
    }
    // create fake users
    const users = userIds.map((id) => ({
      id,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      profileImageUrl: faker.image.avatar(),
    }));

    // ----------------------------------------
    // create fake feed Ids
    // const feedIds = [];
    // for (let i = 0; i < 100; i++) {
    //   feedIds.push(i);
    // }
    // // create fake users
    // const feeds = feedIds.map((id) => ({
    //   id,
    //   firstName: faker.name.firstName(),
    //   lastName: faker.name.lastName(),
    //   profileImageUrl: faker.image.avatar(),
    // }));

    return { users };
  }
}
