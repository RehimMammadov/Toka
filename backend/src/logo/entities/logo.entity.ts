import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Logo {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
