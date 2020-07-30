import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Collection } from 'src/collections/models/collection.model';
import { Collectible } from 'src/collectibles/models/collectible.model';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  createdAt: Date;

  @Field()
  email: string;

  @Field()
  username: string;

  @Field()
  role: 'ADMIN' | 'USER';

  @Field(() => [Collection])
  collections: Collection[];

  @Field(() => [Collectible])
  collectibles: Collectible[];
}
