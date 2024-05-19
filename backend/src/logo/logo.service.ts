import { Injectable } from '@nestjs/common';
import { LogoDto } from './dto/logo.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LogoService {
  constructor(private prismaService: PrismaService) {}

  async create(dto: LogoDto) {
    return await this.prismaService.logo.create({
      data: {
        title: dto.title
      }
    })
  }

  async findAll() {
    return await this.prismaService.logo.findMany()
  }

  async findOne(id: string) {
    return await this.prismaService.logo.findUnique({
      where: { id }
    })
  }

  async update(id: string, dto: LogoDto) {
    return await this.prismaService.logo.update({
      where: { id },
      data: {
        title: dto.title
      }
    })
  }

  async remove(id: string) {
    return await this.prismaService.logo.delete({
      where: { id }
    })
  }
}
