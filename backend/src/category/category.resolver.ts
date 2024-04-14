import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';
import { CategoryDto } from './dto/category.dto';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  createCategory(@Args('dto') dto: CategoryDto) {
    return this.categoryService.create(dto);
  }

  @Query(() => [Category], { name: 'categories' }) 
  findAll() {
    return this.categoryService.findAll();
  }
  
  @Query(() => Category, { name: 'category' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.categoryService.findOne(id);
  }

  @Mutation(() => Category)
  updateCategory(@Args('id', { type: () => String }) id: string, @Args('dto') dto: CategoryDto) {
    return this.categoryService.update(id, dto);
  }

  @Mutation(() => Category)
  removeCategory(@Args('id', { type: () => String }) id: string) {
    return this.categoryService.remove(id);
  }
}
