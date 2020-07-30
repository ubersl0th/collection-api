import { Resolver, Query, ResolveField, Args, Parent } from '@nestjs/graphql';
import { User, Collection, Collectible } from '@prisma/client';
import { Collection as CollectionModel } from './models/collection.model';
import { Collectible as CollectibleModel } from '../collectibles/models/collectible.model';
import { User as UserModel } from '../users/models/user.model';
import { UsersService } from '../users/users.service';
import { CollectionsService } from './collections.service';
import { CollectiblesService } from '../collectibles/collectibles.service';

@Resolver(() => CollectionModel)
export class CollectionsResolver {
  constructor(
    private usersService: UsersService,
    private collectionsService: CollectionsService,
    private collectiblesService: CollectiblesService,
  ) {}

  @Query(() => CollectionModel)
  async collection(@Args('id') id: string): Promise<Collection> {
    return this.collectionsService.findOneById(id);
  }

  @ResolveField(() => UserModel)
  async collector(@Parent() collection: Collection): Promise<User> {
    const { collectorId } = collection;
    return this.usersService.findOneById(collectorId);
  }

  @ResolveField(() => [CollectibleModel])
  async collectibles(@Parent() collection: Collection): Promise<Collectible[]> {
    const { id } = collection;
    return this.collectiblesService.findManyByCollection(id);
  }
}
