import { Injectable } from '@nestjs/common'
import { Prisma, Sim } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { SimCreateInput } from './dto/sim-create.input'
import { UserService } from 'src/user/user.service'

@Injectable()
export class SimService {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly _userService: UserService,
  ) {}

  findAll(args: Prisma.SimFindManyArgs): Promise<Array<Sim>> {
    return this._prismaService.sim.findMany(args)
  }

  findOne(args: Prisma.SimFindFirstArgs) {
    return this._prismaService.sim.findFirst(args)
  }

  async create(createSimDto: SimCreateInput) {
    const { userId, ...data } = createSimDto
    const user = this._userService.findOne({ where: { id: userId } })
    const nik = (await user).nik
    const createdSim = await this._prismaService.sim.create({
      data: {
        ...data,
        tanggal_terbit: new Date(data.tanggal_terbit),
        berlaku_sampai: new Date(data.berlaku_sampai),
        nik,
      },
    })

    return createdSim
  }
}
