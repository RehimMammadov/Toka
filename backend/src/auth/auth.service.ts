import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt"
import { User } from '@prisma/client';
import { Response } from 'express';
import { hash, verify } from 'argon2';
import { PrismaService } from 'prisma/prisma.service';
import { AuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  EXPIRE_DAY_REFRESH_TOKEN = 1;
  REFRESH_TOKEN_NAME = 'refreshToken';

  constructor(private jwt: JwtService, private prismaService: PrismaService) {}

  async getUserById(id: string) {
    return this.prismaService.user.findUnique({
      where: { id }
    })
  }

  async getAllUsers() {
    return this.prismaService.user.findMany()
  }

  async getUserByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: { email }
    })
  }  

  async register(dto: AuthDto) {
    const oldUser = await this.prismaService.user.findUnique({
      where: {
        email: dto.email
      }
    });

    if (oldUser) {
      throw new BadRequestException('User already exists');
    }

    const user = await this.prismaService.user.create({
      data: {
        firstName: dto.firstName,
        lastName: dto.lastName,
        age: dto.age,
        userName: dto.username,
        email: dto.email,
        password: await hash(dto.password)
      }
    });

    const tokens = await this.issueTokens(user.id);
    return {
      user: this.returnUserFields(user),
      ...tokens
    };
  }


  async login(dto: AuthDto) {
    const user = await this.validateUser(dto)
    const tokens = await this.issueTokens(user.id)

    return {
        user: this.returnUserFields(user), ...tokens
    }
  }


  async getNewTokens(refreshToken: string) {
    
    const result = await this.jwt.verifyAsync(refreshToken)
    
    if(!result) throw new UnauthorizedException("Invalid refresh token")

    const user = await this.prismaService.user.findUnique({ where: { id: result.id } })

    const tokens = await this.issueTokens(user.id)
    
    return { user: this.returnUserFields(user), ...tokens }
  }

  private async issueTokens(userId: string) {
    const data = { id: userId }
    const accessToken = this.jwt.sign(data, {
      expiresIn: "1h"
    })

    const refreshToken = this.jwt.sign(data, {
      expiresIn: '7d'
    })

    return { accessToken, refreshToken }
  }

  private returnUserFields(user: User) {
    return {
        id: user.id,
        email: user.email
    }
  }

  private async validateUser(dto: AuthDto) {
        const user = await this.prismaService.user.findUnique({
          where: { email: dto.email }
        })

        if(!user) throw new NotFoundException("User not found")

        const isValid = await verify(user.password, dto.password) 

        if(!isValid) throw new UnauthorizedException("Invalid password")

        return user
    }

    addRefreshTokenToResponse(res: Response, refreshToken: string) {
        const expiresIn = new Date()
        expiresIn.setDate(expiresIn.getDate() + this.EXPIRE_DAY_REFRESH_TOKEN)

        res.cookie(this.REFRESH_TOKEN_NAME, refreshToken, {
            httpOnly: true,
            domain: 'localhost',
            expires: expiresIn,
            secure: true,
            sameSite: 'none'
        })
    }

    removeRefreshTokenToResponse(res: Response) {
        res.cookie(this.REFRESH_TOKEN_NAME, '', {
            httpOnly: true,
            domain: 'localhost',
            expires: new Date(0),
            secure: true,
            sameSite: 'none'
        })
    }
}
