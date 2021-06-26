import { User } from './../users/user.model';
import { FeedType } from './feed-type.enum';

export class Feed {
  constructor(
    public id: number,
    public createdAt: Date,
    public type: FeedType,
    public ownerId: number,
    public owner: User,
    public subjectId: number,
    public subject: User,
    public coverUrl: string,
    public thumbUrl: string,
    public uploadedPhotoUrl?: string
  ) {}
}
