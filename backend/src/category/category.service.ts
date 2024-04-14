import { Injectable } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}
  create(dto: CategoryDto) {
    return this.prismaService.category.create({
      data: {
        title: dto.title
      }
    })
  }

  findAll() {
    return this.prismaService.category.findMany();
  }

  findOne(id: string) {
    return this.prismaService.category.findUnique({
      where: { id }
    })
  }

  update(id: string, dto: CategoryDto) {
    return this.prismaService.category.update({
      where: { id },
      data: {
        title: dto.title
      }
    });
  }

  remove(id: string) {
    return this.prismaService.category.delete({
      where: { id }
    });
  }
}