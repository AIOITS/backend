import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { HttpException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { UserModule } from 'src/user/user.module';
import { jwtModule } from 'config/jwtModule';

describe('AuthController', () => {
  let authController: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule, jwtModule],
      controllers: [AuthController],
      providers: [AuthService, UserService, PrismaService],
    }).compile();

    authController = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(authController).toBeDefined();
  });

  describe('Login', () => {
    it('should return Unauthorized Error when email or password is wrong', async () => {
      const useCasePayload = {
        email: undefined,
        phone: undefined,
        password: 'testing-wrong',
      };

      expect(authController.validate(useCasePayload))
        .rejects
        .toThrowError(HttpException)
    })

    it('should return error when there is no email or phone given', async () => {
      const useCasePayload = {
        email: undefined,
        phone: undefined,
        password: 'testing',
      };

      expect(authController.validate(useCasePayload))
        .rejects
        .toThrowError(HttpException)
    })

    it('should return access_token when login successfully with email', async () => {
      const useCasePayload = {
        email: 'testing@gmail.com',
        phone: undefined,
        password: 'testing',
      };

      const response = await authController.validate(useCasePayload)
      expect(response.statusCode).toStrictEqual(200)
      expect(response.data.id).toBeDefined()
      expect(response.data.access_token).toBeDefined()
    })

    it('should return access_token when login successfully with phone', async () => {
      const useCasePayload = {
        email: undefined,
        phone: '08123456789',
        password: 'testing',
      };

      const response = await authController.validate(useCasePayload)
      expect(response.statusCode).toStrictEqual(200)
      expect(response.data.id).toBeDefined()
      expect(response.data.access_token).toBeDefined()
    })
  })
});
