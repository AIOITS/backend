import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Prisma } from '@prisma/client';
import { Sql } from '@prisma/client/runtime/library';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly _prismaService: PrismaService) {}

  private readonly logger = new Logger(TasksService.name)

  @Cron('0 0 0 * * *')
  async resetSubsidy() {
    const rowSepedaMotor = await this._prismaService.$executeRaw(
      Prisma.sql`
      UPDATE "SubsidyQuota"
      SET quota = 20
      WHERE nomor_stnk IN (
        SELECT nomor_stnk
        FROM "STNK"
        WHERE isi_silinder <= 500 AND jenis = 'sepeda motor'
      );
      `
    )
    const rowMobil = await this._prismaService.$executeRaw(
      Prisma.sql`
      UPDATE "SubsidyQuota"
      SET quota = 20
      WHERE nomor_stnk IN (
        SELECT nomor_stnk
        FROM "STNK"
        WHERE isi_silinder <= 1500 AND jenis = 'mobil'
      );
      `
    )
    this.logger.debug(`${rowSepedaMotor} rows of Sepeda Motor updated, ${rowMobil} rows of Mobil updated`)
  }
}