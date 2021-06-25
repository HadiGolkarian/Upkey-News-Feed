import { Feed } from '@abstractions/feeds/feed.model';
import { User } from '@abstractions/users/user.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import users from './users.fake';
import feeds from './feed.fake';
export class InMemoryData implements InMemoryDbService {
  constructor() {}

  randomIntFromTo(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  createDb(): { users: User[]; feeds: Feed[] } {
    return { users, feeds };
  }
}
