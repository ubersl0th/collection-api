import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/models/user.model';
import { Collectible } from '../../collectibles/models/collectible.model';

@ObjectType()
export class Collection {
  @Field(() => ID)
  id: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => User)
  collector: User;

  @Field(() => [Collectible])
  collectibles: Collectible[];
}
