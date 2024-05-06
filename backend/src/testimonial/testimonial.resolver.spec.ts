import { Test, TestingModule } from '@nestjs/testing';
import { TestimonialResolver } from './testimonial.resolver';
import { TestimonialService } from './testimonial.service';

describe('TestimonialResolver', () => {
  let resolver: TestimonialResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestimonialResolver, TestimonialService],
    }).compile();

    resolver = module.get<TestimonialResolver>(TestimonialResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
