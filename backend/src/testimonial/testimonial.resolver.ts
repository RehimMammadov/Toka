import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TestimonialService } from './testimonial.service';
import { Testimonial } from './entities/testimonial.entity';
import { TestimonialsDto } from './dto/testimonial.dto';


@Resolver(() => Testimonial)
export class TestimonialResolver {
  constructor(private readonly testimonialService: TestimonialService) {}

  @Mutation(() => Testimonial)
  createTestimonial(@Args('dto') dto: TestimonialsDto) {
    return this.testimonialService.create(dto);
  }

  @Query(() => [Testimonial], { name: 'testimonials' })
  findAll() {
    return this.testimonialService.findAll();
  }

  @Query(() => Testimonial, { name: 'testimonial' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.testimonialService.findOne(id);
  }

  @Mutation(() => Testimonial)
  updateTestimonial(@Args('id', { type: () => String }) id: string, @Args('dto') dto: TestimonialsDto ) {
    return this.testimonialService.update(id, dto);
  } 

  @Mutation(() => Testimonial)
  removeTestimonial(@Args('id', { type: () => String }) id: string) {
    return this.testimonialService.remove(id);
  }
}
