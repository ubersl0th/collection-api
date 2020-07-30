import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { CollectionsService } from '../collections/collections.service';
import { CollectiblesService } from '../collectibles/collectibles.service';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [
    UsersResolver,
    UsersService,
    CollectionsService,
    CollectiblesService,
    PrismaService,
  ],
})
export class UsersModule {}
