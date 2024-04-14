import { join } from 'path';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './auth/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CategoryModule } from './category/category.module';
import { LogoModule } from './logo/logo.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/graphql/schema.gql")
    }),
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    CategoryModule,
    LogoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
