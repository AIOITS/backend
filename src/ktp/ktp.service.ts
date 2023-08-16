import { Injectable } from '@nestjs/common';
import { KTPCreateInput } from 'src/@generated/prisma-nestjs-graphql/ktp/ktp-create.input';
import { KTPUpdateInput } from 'src/@generated/prisma-nestjs-graphql/ktp/ktp-update.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class KtpService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createKtpDto: KTPCreateInput): Promise<any> {
    createKtpDto.tanggal_lahir = new Date(createKtpDto.tanggal_lahir)
    return this.prismaService.kTP.create({
      data: createKtpDto
    })
  }

  findAll() {
    return `This action returns all ktp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ktp`;
  }

  update(id: number, updateKtpDto: KTPUpdateInput) {
    return `This action updates a #${id} ktp`;
  }

  remove(id: number) {
    return `This action removes a #${id} ktp`;
  }
}
