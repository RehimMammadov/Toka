import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string

  @Field(() => Number, { description: 'Example field (placeholder)' })
  price: number

  @Field(() => Array, { description: 'Example field (placeholder)' })
  iamges: string[]
}
