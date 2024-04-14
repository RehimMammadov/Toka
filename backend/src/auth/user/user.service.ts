import { Injectable } from '@nestjs/common';
import { hash } from "argon2"
import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getById(id: string) {
    return this.prisma.user.findUnique({
      where: { id }
    })
  }

  getByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email }
    })
  }

  async getProfiles() {
    return await this.prisma.user.findMany()
  }

  async getProfile(id: string) {
    const profile = await this.getById(id)
  }

  async update(id: string, dto: AuthDto) {
    let data = dto

    if(dto.password) {
      data = {...dto, password: await hash(dto.password)}
    }

    return this.prisma.user.update({
      where: { id },
      data,
      select: {
        firstName: true,
        lastName: true,
        userName: true,
        age: true,
        email: true
      }
    })
  }

  async delete(id: string) {
    return this.prisma.user.delete({
      where: { id }
    })
  }
}
