import { Injectable } from '@nestjs/common';
import { LogoDto } from './dto/logo.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LogoService {
  constructor(private prismaService: PrismaService) {}

  create(dto: LogoDto) {
    return this.prismaService.logo.create({
      data: {
        title: dto.title
      }
    })
  }

  findAll() {
    return this.prismaService.logo.findMany()
  }

  findOne(id: string) {
    return this.prismaService.logo.findUnique({
      where: { id }
    })
  }

  update(id: string, dto: LogoDto) {
    return this.prismaService.logo.update({
      where: { id },
      data: {
        title: dto.title
      }
    })
  }

  remove(id: string) {
    return this.prismaService.logo.delete({
      where: { id }
    })
  }
}
