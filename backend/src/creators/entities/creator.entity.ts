import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Creator {
  @Field(() => String, { description: 'Unique identifier for the creator' })
  id: string;

  @Field(() => String, { description: 'Full name of the creator' })
  fullName: string;

  @Field(() => String, { description: 'Email of the creator' })
  email: string;

  @Field(() => [String], { nullable: true, description: 'NFT projects of the creator' })
  nft: string[];
}
