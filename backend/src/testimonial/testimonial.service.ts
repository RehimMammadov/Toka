import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TestimonialsDto } from './dto/testimonial.dto';


@Injectable()
export class TestimonialService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: TestimonialsDto) {
    return await this.prismaService.testimonials.create({
      data: {
        fullname: dto.fullname,
        vocation: dto.vocation,
        avatar: dto.avatar,
        comment: dto.comment
      }
    });
  }

  async findAll() {
    return await this.prismaService.testimonials.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.testimonials.findUnique({
      where: { id }
    });
  }

  async update(id: string, dto: TestimonialsDto) {
    return await this.prismaService.testimonials.update({
      where: { id },
      data: {
        fullname: dto.fullname,
        vocation: dto.vocation,
        avatar: dto.avatar,
        comment: dto.comment
      }
    });
  }

  async remove(id: string) {
    return await this.prismaService.testimonials.delete({
      where: { id }
    });
  }
}
