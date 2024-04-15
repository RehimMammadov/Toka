import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Logo {
  @Field(() => String, { description: 'ID of the logo' })
  id: string;

  @Field(() => String, { description: 'Title of the logo' })
  title: string;
}
