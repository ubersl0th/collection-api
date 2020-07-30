import { Resolver, Query, ResolveField, Args, Parent } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User, Collection, Collectible } from '@prisma/client';
import { User as UserModel } from './models/user.model';
import { Collection as CollectionModel } from '../collections/models/collection.model';
import { Collectible as CollectibleModel } from '../collectibles/models/collectible.model';
import { CollectionsService } from 'src/collections/collections.service';
import { CollectiblesService } from 'src/collectibles/collectibles.service';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private collectionsService: CollectionsService,
    private collectiblesService: CollectiblesService,
  ) {}

  @Query(() => UserModel)
  async user(@Args('id') id: string): Promise<User> {
    return this.usersService.findOneByUsername(id);
  }

  @ResolveField(() => [CollectionModel])
  async collections(@Parent() user: User): Promise<Collection[]> {
    const { id } = user;
    return this.collectionsService.findManyByCollector(id);
  }

  @ResolveField(() => [CollectibleModel])
  async collectibles(@Parent() user: User): Promise<Collectible[]> {
    const { id } = user;
    return this.collectiblesService.findManyByCollector(id);
  }
}
