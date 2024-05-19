import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { ProductsDto } from './dto/products.dto';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Mutation(() => Product)
  createProduct(@Args('dto') dto: ProductsDto[], id: string) {
    return this.productService.create(id, dto);
  }

  @Query(() => [Product], { name: 'product' })
  findAll() {
    return this.productService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.productService.findOne(id);
  }

  @Query(() => [Product], { name: 'product' })
  findByCreator(@Args('id', { type: () => String }) creatorId: string) {
    return this.productService.findOne(creatorId);
  }

  @Mutation(() => Product)
  updateProduct(@Args('dto') dto: ProductsDto, @Args('id', { type: () => String }) id: string) {
    return this.productService.update(id, dto);
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => String }) id: string) {
    return this.productService.remove(id);
  }
}
