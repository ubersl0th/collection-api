import { Resolver, Query, ResolveField, Args, Parent } from '@nestjs/graphql';
import { User, Collection, Collectible } from '@prisma/client';
import { Collectible as CollectibleModel } from './models/collectible.model';
import { Collection as CollectionModel } from '../collections/models/collection.model';
import { User as UserModel } from '../users/models/user.model';
import { UsersService } from '../users/users.service';
import { CollectionsService } from '../collections/collections.service';
import { CollectiblesService } from './collectibles.service';

@Resolver(() => CollectibleModel)
export class CollectiblesResolver {
  constructor(
    private usersService: UsersService,
    private collectionsService: CollectionsService,
    private collectiblesService: CollectiblesService,
  ) {}

  @Query(() => CollectibleModel)
  async collectible(@Args('id') id: string): Promise<Collectible> {
    return this.collectiblesService.findOneById(id);
  }

  @ResolveField(() => CollectionModel)
  async collection(@Parent() collectible: Collectible): Promise<Collection> {
    const { collectionId } = collectible;
    return this.collectionsService.findOneById(collectionId);
  }

  @ResolveField(() => UserModel)
  async collector(@Parent() collectible: Collectible): Promise<User> {
    const { collectorId } = collectible;
    return this.usersService.findOneById(collectorId);
  }
}
