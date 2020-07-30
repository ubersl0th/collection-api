import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/models/user.model';
import { Collection } from '../../collections/models/collection.model';

@ObjectType()
export class Collectible {
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

  @Field(() => Float, { nullable: true })
  value?: number;

  @Field({ nullable: true })
  imageUrl?: string;

  @Field(() => Collection)
  collection: Collection;

  @Field(() => User)
  collector: User;
}
