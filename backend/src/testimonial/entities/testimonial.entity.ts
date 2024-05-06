import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Testimonial {
  @Field(() => String, { description: 'Example field (placeholder)' })
  id: string;

  @Field(() => String, { description: 'Fullname of the testimonial' })
  fullname: string;

  @Field(() => String, { description: 'Vocation of the testimonial'})
  vocation: string

  @Field(() => String, { description: 'Avatar of the testimonial' })
  avatar: string

  @Field(() => String, { description: 'Comment of the testimonial' })
  comment: string
}
