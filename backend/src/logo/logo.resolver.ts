import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LogoService } from './logo.service';
import { Logo } from './entities/logo.entity';
import { LogoDto } from './dto/logo.dto';

@Resolver(() => Logo)
export class LogoResolver {
  constructor(private readonly logoService: LogoService) {}

  @Mutation(() => Logo)
  createLogo(@Args('dto') dto: LogoDto) {
    return this.logoService.create(dto);
  }

  @Query(() => [Logo], { name: 'logos' })
  findAll() {
    return this.logoService.findAll();
  }

  @Query(() => Logo, { name: 'logo' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.logoService.findOne(id);
  }

  @Mutation(() => Logo)
  updateLogo(@Args('dto') dto: LogoDto, @Args('id', { type: () => String }) id: string) {
    return this.logoService.update(id, dto);
  }

  @Mutation(() => Logo)
  removeLogo(@Args('id', { type: () => String }) id: string) {
    return this.logoService.remove(id);
  }
}
