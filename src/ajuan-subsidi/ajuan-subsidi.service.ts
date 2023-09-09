import { Injectable, HttpException } from '@nestjs/common'
import { AjuanSubsidi, Prisma } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'
import { AjuanSubsidiCreateInput } from './dto/ajuan-subsidi-create.input'
import { StorageService } from 'src/storage/storage.service'

@Injectable()
export class AjuanSubsidiService {
  constructor(
    private readonly _prismaService: PrismaService,
    private readonly storageService: StorageService,
  ) {}

  findAll(args: Prisma.AjuanSubsidiFindManyArgs): Promise<Array<AjuanSubsidi>> {
    return this._prismaService.ajuanSubsidi.findMany(args)
  }

  findOne(args: Prisma.AjuanSubsidiFindFirstArgs) {
    return this._prismaService.ajuanSubsidi.findFirst(args)
  }

  async create(createAjuanSubsidiDto: AjuanSubsidiCreateInput) {
    const { userId, jumlah, alasan, tanggal_pengajuan, dokumen_pendukung } =
      createAjuanSubsidiDto

    const newDocuments = await Promise.all(
      dokumen_pendukung.map((file) =>
        this.storageService.save('dokumen_pendukung/', file),
      ),
    )

    const createdAjuanSubsidi = await this._prismaService.ajuanSubsidi.create({
      data: {
        jumlah: +jumlah,
        alasan,
        dokumen_pendukung: {
          createMany: {
            data: newDocuments,
          },
        },
        tanggal_pengajuan: new Date(tanggal_pengajuan),
        user: { connect: { id: userId } },
        status_pengajuan: 'diproses',
      },
    })

    return {
      ...createdAjuanSubsidi,
      tanggal_pengajuan: createdAjuanSubsidi.tanggal_pengajuan
        .toISOString()
        .split('T')[0],
      dokumen_pendukung: newDocuments,
    }
  }
}
