import { Module } from '@nestjs/common';
import { LogoService } from './logo.service';
import { LogoResolver } from './logo.resolver';

@Module({
  providers: [LogoResolver, LogoService],
})
export class LogoModule {}
