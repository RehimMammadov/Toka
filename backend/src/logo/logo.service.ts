import { Injectable } from '@nestjs/common';
import { CreateLogoInput } from './dto/create-logo.input';
import { UpdateLogoInput } from './dto/update-logo.input';

@Injectable()
export class LogoService {
  create(createLogoInput: CreateLogoInput) {
    return 'This action adds a new logo';
  }

  findAll() {
    return `This action returns all logo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logo`;
  }

  update(id: number, updateLogoInput: UpdateLogoInput) {
    return `This action updates a #${id} logo`;
  }

  remove(id: number) {
    return `This action removes a #${id} logo`;
  }
}
