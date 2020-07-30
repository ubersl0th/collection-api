import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { CollectiblesModule } from './collectibles/collectibles.module';
import { CollectionsModule } from './collections/collections.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    CollectiblesModule,
    CollectionsModule,
    UsersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      debug: true, // use env var
      playground: true, // use env var
    }),
  ],
})
export class AppModule {}
