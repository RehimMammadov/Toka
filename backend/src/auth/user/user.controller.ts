import { Controller, Get, Body, Put, Delete, UsePipes, ValidationPipe, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { AuthDto } from 'src/auth/dto/auth.dto';

@Controller('user/profile')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Auth()
  async profile(@CurrentUser('id') id: string) {
    return this.userService.getProfile(id)
  }

  @Get('all')
  async getProfiles() {
    return this.userService.getProfiles()
  }

  @UsePipes(new ValidationPipe()) 
  @HttpCode(200)
  @Put()
  @Auth()
  async update(@CurrentUser('id') id: string, @Body() dto: AuthDto) {
    return this.userService.update(id, dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@CurrentUser('id') id: string) {
    return this.userService.delete(id)
  }
}
