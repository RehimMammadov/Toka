import { Injectable } from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prismaService: PrismaService) {}
  async create(dto: CategoryDto) {
    return await this.prismaService.category.create({
      data: {
        title: dto.title
      }
    })
  }

  async findAll() {
    return await this.prismaService.category.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.category.findUnique({
      where: { id }
    })
  }

  async update(id: string, dto: CategoryDto) {
    return await this.prismaService.category.update({
      where: { id },
      data: {
        title: dto.title
      }
    });
  }

  async remove(id: string) {
    return await this.prismaService.category.delete({
      where: { id }
    });
  }
}