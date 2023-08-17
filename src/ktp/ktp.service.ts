import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { KTPCreateInput } from 'src/ktp/dto/ktp-create.input'
import { KTPUpdateInput } from 'src/ktp/dto/ktp-update.input'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class KtpService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createKtpDto: KTPCreateInput) {
    const { nik } = createKtpDto
    if (
      await this.prismaService.kTP.count({
        where: { nik },
      })
    ) {
      throw new HttpException('NIK already registered', 400)
    }

    const createdKTP = await this.prismaService.kTP.create({
      data: {
        ...createKtpDto,
        tanggal_lahir: new Date(createKtpDto.tanggal_lahir),
        tanggal_terbit: new Date(createKtpDto.tanggal_terbit),
      },
    })

    return {
      ...createdKTP,
      tanggal_lahir: createdKTP.tanggal_lahir.toISOString().split('T')[0],
      tanggal_terbit: createdKTP.tanggal_terbit.toISOString().split('T')[0],
    }
  }

  findAll() {
    return `This action returns all ktp`
  }

  findOne(id: number) {
    return `This action returns a #${id} ktp`
  }

  async update(nik: string, updateKtpDto: KTPUpdateInput) {
    try {
      await this.prismaService.kTP.findFirstOrThrow({
        where: { nik },
      })
    } catch (error) {
      throw new HttpException('KTP not found', HttpStatus.NOT_FOUND)
    }

    const updatedKTP = await this.prismaService.kTP.update({
      where: { nik },
      data: {
        ...updateKtpDto,
        tanggal_lahir: new Date(updateKtpDto.tanggal_lahir),
        tanggal_terbit: new Date(updateKtpDto.tanggal_terbit),
      },
    })

    return {
      ...updatedKTP,
      tanggal_lahir: updatedKTP.tanggal_lahir.toISOString().split('T')[0],
      tanggal_terbit: updatedKTP.tanggal_terbit.toISOString().split('T')[0],
    }
  }

  async remove(nik: string) {
    try {
      await this.prismaService.kTP.findFirstOrThrow({
        where: { nik },
      })
    } catch (error) {
      throw new HttpException('KTP not found', HttpStatus.NOT_FOUND)
    }

    await this.prismaService.kTP.delete({
      where: { nik },
    })
  }
}
