import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Category {
  @Field(() => String, { description: 'ID of the category' })
  id: string;

  @Field(() => String, { description: 'Title of the category' })
  title: string;
}
