import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { Ktp, Prisma } from '@prisma/client'
import { KtpCreateInput } from 'src/ktp/dto/ktp-create.input'
import { KtpUpdateInput } from 'src/ktp/dto/ktp-update.input'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class KtpService {
  constructor(private readonly _prismaService: PrismaService) {}

  async create(createKtpDto: KtpCreateInput) {
    const { nik } = createKtpDto
    if (
      await this._prismaService.ktp.count({
        where: { nik },
      })
    ) {
      throw new HttpException('NIK already registered', 400)
    }

    const createdKtp = await this._prismaService.ktp.create({
      data: {
        ...createKtpDto,
        tanggal_lahir: new Date(createKtpDto.tanggal_lahir),
        tanggal_terbit: new Date(createKtpDto.tanggal_terbit),
      },
    })

    return {
      ...createdKtp,
      tanggal_lahir: createdKtp.tanggal_lahir.toISOString().split('T')[0],
      tanggal_terbit: createdKtp.tanggal_terbit.toISOString().split('T')[0],
    }
  }

  findAll(args: Prisma.KtpFindManyArgs): Promise<Array<Ktp>> {
    return this._prismaService.ktp.findMany(args)
  }

  findOne(args: Prisma.KtpFindFirstArgs) {
    return this._prismaService.ktp.findFirst(args)
  }

  async update(nik: string, updateKtpDto: KtpUpdateInput) {
    try {
      await this._prismaService.ktp.findFirstOrThrow({
        where: { nik },
      })
    } catch (error) {
      throw new HttpException('Ktp not found', HttpStatus.NOT_FOUND)
    }

    const updatedKtp = await this._prismaService.ktp.update({
      where: { nik },
      data: {
        ...updateKtpDto,
        tanggal_lahir: new Date(updateKtpDto.tanggal_lahir),
        tanggal_terbit: new Date(updateKtpDto.tanggal_terbit),
      },
    })

    return {
      ...updatedKtp,
      tanggal_lahir: updatedKtp.tanggal_lahir.toISOString().split('T')[0],
      tanggal_terbit: updatedKtp.tanggal_terbit.toISOString().split('T')[0],
    }
  }

  async remove(nik: string) {
    try {
      await this._prismaService.ktp.findFirstOrThrow({
        where: { nik },
      })
    } catch (error) {
      throw new HttpException('Ktp not found', HttpStatus.NOT_FOUND)
    }

    await this._prismaService.ktp.delete({
      where: { nik },
    })
  }
}
