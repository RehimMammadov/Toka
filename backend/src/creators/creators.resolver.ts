import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreatorsService } from './creators.service';
import { Creator } from './entities/creator.entity';
import { CreatorsDto } from './dto/creator.dto';

@Resolver(() => Creator)
export class CreatorsResolver {
  constructor(private readonly creatorsService: CreatorsService) {}

  @Mutation(() => Creator)
  createCreator(@Args('dto') dto: CreatorsDto) {
    return this.creatorsService.create(dto);
  }

  @Query(() => [Creator], { name: 'creators' })
  findAll() {
    return this.creatorsService.findAll();
  }

  @Query(() => Creator, { name: 'creator' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.creatorsService.findOne(id);
  }

  @Mutation(() => Creator)
  updateCreator(@Args('id', { type: () => String }) id: string, @Args('dto') dto: CreatorsDto) {
    return this.creatorsService.update(dto, id);
  }

  @Mutation(() => Creator)
  removeCreator(@Args('id', { type: () => String }) id: string) {
    return this.creatorsService.remove(id);
  }
}
