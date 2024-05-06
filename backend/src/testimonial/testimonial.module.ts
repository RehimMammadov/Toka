import { Module } from '@nestjs/common';
import { TestimonialService } from './testimonial.service';
import { TestimonialResolver } from './testimonial.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [TestimonialResolver, TestimonialService, PrismaService],
})
export class TestimonialModule {}
