import { Module } from '@nestjs/common'
import { AjuanSubsidiService } from './ajuan-subsidi.service'
import { AjuanSubsidiController } from './ajuan-subsidi.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { StorageService } from 'src/storage/storage.service'
import { jwtModule } from 'config/jwtModule'
import { StnkService } from 'src/stnk/stnk.service'
import { UserService } from 'src/user/user.service'
@Module({
  imports: [jwtModule],
  controllers: [AjuanSubsidiController],
  providers: [AjuanSubsidiService, PrismaService, StorageService, StnkService, UserService],
})
export class AjuanSubsidiModule {}
