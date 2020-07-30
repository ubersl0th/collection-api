import { Module } from '@nestjs/common';
import { CollectiblesResolver } from './collectibles.resolver';
import { CollectiblesService } from './collectibles.service';
import { CollectionsService } from '../collections/collections.service';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [
    CollectiblesResolver,
    CollectiblesService,
    CollectionsService,
    UsersService,
    PrismaService,
  ],
})
export class CollectiblesModule {}
