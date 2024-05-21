import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProductsDto } from './dto/products.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(creatorId: string, dto: ProductsDto[]): Promise<Product[]> {
    const creator = await this.prismaService.nFT_Creater.findUnique({
      where: { id: creatorId },
    });

    if (!creator) {
      throw new Error(`Creator with ID ${creatorId} not found`);
    }

    const createdNfts = await Promise.all(
      dto.map((nftData) =>
        this.prismaService.nFT.create({
          data: {
            title: nftData.title,
            price: nftData.price,
            image: { set: nftData.images },
            creator: { connect: { id: creatorId } },
          },
        }),
      ),
    );

    return createdNfts.map((nft) => ({
      id: nft.id,
      title: nft.title,
      price: nft.price,
      images: nft.image
    }));
  }

  async findAll() {
    return await this.prismaService.nFT.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.nFT.findUnique({
      where: { id }
    });
  }

  async findByCreator(creatorId: string) {
    return await this.prismaService.nFT.findMany({
      where: { creator: { id: creatorId } }
    })
  }

  async update(id: string, dto: ProductsDto) {
    const existingNft = await this.prismaService.nFT.findUnique({
        where: { id }
    });

    if (!existingNft) {
        throw new Error(`NFT with ID ${id} not found`);
    }

    return await this.prismaService.nFT.update({
        where: { id },
        data: {
            title: dto.title,
            price: dto.price,
            image: { set: dto.images }
        }
    });
}


  async remove(id: string) {
    return await this.prismaService.nFT.delete({
      where: { id }
    });
  }
}
