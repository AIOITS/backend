import { Module } from '@nestjs/common'
import { StnkService } from './stnk.service'
import { StnkController } from './stnk.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { jwtModule } from 'config/jwtModule'
import { UserService } from 'src/user/user.service'

@Module({
  imports: [jwtModule],
  controllers: [StnkController],
  providers: [StnkService, PrismaService, StnkService, UserService],
})
export class StnkModule {}
