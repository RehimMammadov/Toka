import { Test, TestingModule } from '@nestjs/testing';
import { LogoResolver } from './logo.resolver';
import { LogoService } from './logo.service';

describe('LogoResolver', () => {
  let resolver: LogoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogoResolver, LogoService],
    }).compile();

    resolver = module.get<LogoResolver>(LogoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
