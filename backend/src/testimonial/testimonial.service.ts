import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TestimonialsDto } from './dto/testimonial.dto';


@Injectable()
export class TestimonialService {
  constructor(private readonly prismaService: PrismaService) {}

  create(dto: TestimonialsDto) {
    return this.prismaService.testimonials.create({
      data: {
        fullname: dto.fullname,
        vocation: dto.vocation,
        avatar: dto.avatar,
        comment: dto.comment
      }
    });
  }

  findAll() {
    return this.prismaService.testimonials.findMany();
  }

  findOne(id: string) {
    return this.prismaService.testimonials.findUnique({
      where: { id }
    });
  }

  update(id: string, dto: TestimonialsDto) {
    return this.prismaService.testimonials.update({
      where: { id },
      data: {
        fullname: dto.fullname,
        vocation: dto.vocation,
        avatar: dto.avatar,
        comment: dto.comment
      }
    });
  }

  remove(id: string) {
    return this.prismaService.testimonials.delete({
      where: { id }
    });
  }
}
