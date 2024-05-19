import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreatorsDto } from './dto/creator.dto';
import { Args } from '@nestjs/graphql';

@Injectable()
export class CreatorsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: CreatorsDto) {
    const { nft, ...creatorsData } = dto
    const ntfIds = nft || [];

    return await this.prismaService.nFT_Creater.create({
      data: {
          ...creatorsData,
          nft: { connect: ntfIds.map(id => ({ id }))}
      }
    });
  }

  async findAll() {
    return await this.prismaService.nFT_Creater.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.nFT_Creater.findUnique({
      where: { id }
    })
  }

  async update(@Args('dto') dto: CreatorsDto, id: string) {
    const { nft, ...creatorsData } = dto
    const ntfIds = nft || [];

    return await this.prismaService.nFT_Creater.update({
      where: { id },
      data: {
        ...creatorsData,
        nft: { connect: ntfIds.map(id => ({ id }))}
      }
    });
  }

  async remove(id: string) {
    return await this.prismaService.nFT_Creater.delete({
      where: { id }
    });
  }
}
