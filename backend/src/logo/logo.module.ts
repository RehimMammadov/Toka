import { Module } from '@nestjs/common';
import { LogoService } from './logo.service';
import { LogoResolver } from './logo.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  providers: [LogoResolver, LogoService, PrismaService],
})
export class LogoModule {}
