import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LogoService } from './logo.service';
import { Logo } from './entities/logo.entity';
import { CreateLogoInput } from './dto/create-logo.input';
import { UpdateLogoInput } from './dto/update-logo.input';

@Resolver(() => Logo)
export class LogoResolver {
  constructor(private readonly logoService: LogoService) {}

  @Mutation(() => Logo)
  createLogo(@Args('createLogoInput') createLogoInput: CreateLogoInput) {
    return this.logoService.create(createLogoInput);
  }

  @Query(() => [Logo], { name: 'logo' })
  findAll() {
    return this.logoService.findAll();
  }

  @Query(() => Logo, { name: 'logo' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.logoService.findOne(id);
  }

  @Mutation(() => Logo)
  updateLogo(@Args('updateLogoInput') updateLogoInput: UpdateLogoInput) {
    return this.logoService.update(updateLogoInput.id, updateLogoInput);
  }

  @Mutation(() => Logo)
  removeLogo(@Args('id', { type: () => Int }) id: number) {
    return this.logoService.remove(id);
  }
}
