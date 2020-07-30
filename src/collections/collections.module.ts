import { Module } from '@nestjs/common';
import { CollectionsResolver } from './collections.resolver';
import { CollectionsService } from './collections.service';
import { CollectiblesService } from '../collectibles/collectibles.service';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [
    CollectionsResolver,
    CollectionsService,
    CollectiblesService,
    UsersService,
    PrismaService,
  ],
})
export class CollectionsModule {}
