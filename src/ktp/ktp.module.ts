import { Module } from '@nestjs/common';
import { KtpService } from './ktp.service';
import { KtpController } from './ktp.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [KtpController],
  providers: [KtpService, PrismaService]
})
export class KtpModule {}
