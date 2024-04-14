import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule, ConfigService } from "@nestjs/config"
import { JwtModule } from "@nestjs/jwt"
import { getJwtConfig } from './config/jwt.config';
import { JwtStrategy } from './jwt/jwt.strategy';
import { PrismaService } from 'prisma/prisma.service';
import { UserService } from 'src/auth/user/user.service';

@Module({
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, UserService, JwtStrategy, PrismaService]
})
export class AuthModule {}
