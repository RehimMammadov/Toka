import { join } from 'path';
import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './auth/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CategoryModule } from './category/category.module';
import { LogoModule } from './logo/logo.module';
import { TestimonialModule } from './testimonial/testimonial.module';
import { ProductModule } from './product/product.module';
import { CreatorsModule } from './creators/creators.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.gql")
    }),
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    CategoryModule,
    LogoModule,
    TestimonialModule,
    ProductModule,
    CreatorsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
