import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { jwtModule } from 'config/jwtModule';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma/prisma.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        jwtModule
      ],
      controllers: [UserController],
      providers: [
        UserService,
        PrismaService
      ]
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
