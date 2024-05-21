import { ObjectType, Field } from '@nestjs/graphql';
import { GraphQLInt, GraphQLString } from 'graphql';

@ObjectType()
export class Product {
  @Field(() => GraphQLString, { description: 'Example field (placeholder)' })
  id: string;

  @Field(() => GraphQLString, { description: 'Example field (placeholder)' })
  title: string;

  @Field(() => GraphQLInt, { description: 'Example field (placeholder)' })
  price: number;

  @Field(() => [GraphQLString], { description: 'Example field (placeholder)' })
  images: string[];
}