import { Module } from '@nestjs/common'
import { SimService } from './sim.service'
import { SimController } from './sim.controller'
import { PrismaService } from 'src/prisma/prisma.service'
import { jwtModule } from 'config/jwtModule'
import { UserService } from 'src/user/user.service'

@Module({
  imports: [jwtModule],
  controllers: [SimController],
  providers: [SimService, PrismaService, UserService],
})
export class SimModule {}
