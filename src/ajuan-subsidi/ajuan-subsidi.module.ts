import { Module } from '@nestjs/common'
import { AjuanSubsidiService } from './ajuan-subsidi.service'
import { AjuanSubsidiController } from './ajuan-subsidi.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { StorageService } from 'src/storage/storage.service'
import { jwtModule } from 'config/jwtModule'
@Module({
  imports: [jwtModule],
  controllers: [AjuanSubsidiController],
  providers: [AjuanSubsidiService, PrismaService, StorageService],
})
export class AjuanSubsidiModule {}
