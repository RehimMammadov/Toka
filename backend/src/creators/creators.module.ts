import { Module } from '@nestjs/common';
import { CreatorsService } from './creators.service';
import { CreatorsResolver } from './creators.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [CreatorsResolver, CreatorsService, PrismaService],
})
export class CreatorsModule {}
