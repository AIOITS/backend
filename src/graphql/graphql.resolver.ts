import {
  Resolver,
  Query,
  Args,
  Parent,
  ResolveField,
  Int,
} from '@nestjs/graphql'
import { UserService } from 'src/user/user.service'
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { KtpService } from 'src/ktp/ktp.service'
import { SimService } from 'src/sim/sim.service'
import { FindManyUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-many-user.args'
import { Ktp } from 'src/@generated/prisma-nestjs-graphql/ktp/ktp.model'
import { Sim } from 'src/@generated/prisma-nestjs-graphql/sim/sim.model'
import { FindManyKtpArgs } from 'src/@generated/prisma-nestjs-graphql/ktp/find-many-ktp.args'
import { StnkService } from 'src/stnk/stnk.service'
import { Stnk } from 'src/@generated/prisma-nestjs-graphql/stnk/stnk.model'
import { PkbService } from 'src/pkb/pkb.service'
import { FindManyStnkArgs } from 'src/@generated/prisma-nestjs-graphql/stnk/find-many-stnk.args'
import { Pkb } from 'src/@generated/prisma-nestjs-graphql/pkb/pkb.model'
import { HistoryPengisian } from 'src/@generated/prisma-nestjs-graphql/history-pengisian/history-pengisian.model'
import { HistoryPengisianService } from 'src/history-pengisian/history-pengisian.service'
import { AjuanSubsidiService } from 'src/ajuan-subsidi/ajuan-subsidi.service'
import { AjuanSubsidi } from 'src/@generated/prisma-nestjs-graphql/ajuan-subsidi/ajuan-subsidi.model'
import { FindManyHistoryPengisianArgs } from 'src/@generated/prisma-nestjs-graphql/history-pengisian/find-many-history-pengisian.args'
import { FindManyAjuanSubsidiArgs } from 'src/@generated/prisma-nestjs-graphql/ajuan-subsidi/find-many-ajuan-subsidi.args'
import { FindManySimArgs } from 'src/@generated/prisma-nestjs-graphql/sim/find-many-sim.args'
import { FindManyPkbArgs } from 'src/@generated/prisma-nestjs-graphql/pkb/find-many-pkb.args'
import { PrismaService } from 'src/prisma/prisma.service'
import { FindManyFileArgs } from 'src/@generated/prisma-nestjs-graphql/file/find-many-file.args'
import { File } from 'src/@generated/prisma-nestjs-graphql/file/file.model'
import { HistoryPengisianAggregateArgs } from 'src/@generated/prisma-nestjs-graphql/history-pengisian/history-pengisian-aggregate.args'
import { AggregateHistoryPengisian } from 'src/@generated/prisma-nestjs-graphql/history-pengisian/aggregate-history-pengisian.output'
import { HistoryPengisianGroupBy } from 'src/@generated/prisma-nestjs-graphql/history-pengisian/history-pengisian-group-by.output'
import { HistoryPengisianGroupByArgs } from 'src/history-pengisian/dto/history-pengisian-group-by.args'
import { Spbu } from 'src/@generated/prisma-nestjs-graphql/spbu/spbu.model'
import { FindManySpbuArgs } from 'src/@generated/prisma-nestjs-graphql/spbu/find-many-spbu.args'

@Resolver()
export class GraphqlResolver {
  constructor(
    private readonly userService: UserService,
    private readonly ktpService: KtpService,
    private readonly historyPengisianService: HistoryPengisianService,
    private readonly ajuanSubsidiService: AjuanSubsidiService,
    private readonly simService: SimService,
    private readonly stnkService: StnkService,
    private readonly pkbService: PkbService,
    private readonly prismaService: PrismaService,
  ) {}

  @Query(() => [User], { name: 'user' })
  async getAllUser(@Args() query: FindManyUserArgs) {
    return await this.userService.findAll(query)
  }

  @Query(() => [Ktp], { name: 'ktp' })
  async getAllKtp(@Args() query: FindManyKtpArgs) {
    return await this.ktpService.findAll(query)
  }

  @Query(() => [HistoryPengisian], { name: 'history_pengisian' })
  async getAllHistoryPengisian(@Args() query: FindManyHistoryPengisianArgs) {
    return await this.historyPengisianService.findAll(query)
  }

  @Query(() => [AjuanSubsidi], { name: 'ajuan_subsidi' })
  async getAllAjuanSubsidi(@Args() query: FindManyAjuanSubsidiArgs) {
    return await this.ajuanSubsidiService.findAll(query)
  }

  @Query(() => [Sim], { name: 'sim' })
  async getAllSim(@Args() query: FindManySimArgs) {
    return await this.simService.findAll(query)
  }

  @Query(() => [Stnk], { name: 'stnk' })
  async getAllStnk(@Args() query: FindManyStnkArgs) {
    return await this.stnkService.findAll(query)
  }

  @Query(() => [Pkb], { name: 'pkb' })
  async getAllPkb(@Args() query: FindManyPkbArgs) {
    return await this.pkbService.findAll(query)
  }

  @Query(() => [Spbu], { name: 'spbu' })
  async getAllSpbu(@Args() query: FindManySpbuArgs) {
    return await this.prismaService.spbu.findMany(query)
  }

  @Query(() => AggregateHistoryPengisian, {
    name: 'history_pengisian_aggregate',
  })
  async getHistoryPengisian(@Args() query: HistoryPengisianAggregateArgs) {
    return await this.historyPengisianService.aggregate(query)
  }

  @Query(() => [HistoryPengisianGroupBy], { name: 'history_pengisian_groupby' })
  async getGroupByHistoryPengisian(@Args() query: HistoryPengisianGroupByArgs) {
    return await this.historyPengisianService.groupBy(query)
  }
}
@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly ktpService: KtpService,
    private readonly historyPengisianService: HistoryPengisianService,
    private readonly ajuanSubsidiService: AjuanSubsidiService,
  ) {}

  @Query(() => [User], { name: 'user' })
  async getUsers(@Args() query: FindManyUserArgs) {
    return await this.userService.findAll(query)
  }

  @ResolveField('ktp', () => Ktp)
  async getUserKtp(@Parent() user: User) {
    return await this.ktpService.findOne({ where: { user: { id: user.id } } })
  }

  @ResolveField('history_pengisian', () => [HistoryPengisian])
  async getHistoryPengisian(@Parent() user: User) {
    return await this.historyPengisianService.findAll({
      where: { user: { id: user.id } },
    })
  }

  @ResolveField('ajuan_subsidi', () => [AjuanSubsidi])
  async getAjuanSubsidi(@Parent() user: User) {
    return await this.ajuanSubsidiService.findAll({
      where: { user: { id: user.id } },
    })
  }
}

@Resolver(() => Ktp)
export class KtpResolver {
  constructor(
    private readonly ktpService: KtpService,
    private readonly simService: SimService,
    private readonly stnkService: StnkService,
  ) {}

  @Query(() => [Ktp], { name: 'ktp' })
  async getAllKtp(@Args() query: FindManyKtpArgs) {
    return await this.ktpService.findAll(query)
  }

  @ResolveField('sim', () => [Sim])
  async getSim(@Parent() ktp: Ktp) {
    return await this.simService.findAll({ where: { ktp: { nik: ktp.nik } } })
  }

  @ResolveField('stnk', () => [Stnk])
  async getStnk(@Parent() ktp: Ktp) {
    return await this.stnkService.findAll({ where: { ktp: { nik: ktp.nik } } })
  }
}

@Resolver(() => AjuanSubsidi)
export class AjuanSubsidiResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @ResolveField(() => [File], { name: 'dokumen_pendukung' })
  async getAllFiles(@Parent() ajuanSubsidi: AjuanSubsidi) {
    return await this.prismaService.file.findMany({
      where: { ajuanSubsidi: { id: ajuanSubsidi.id } },
    })
  }
}

@Resolver(() => Stnk)
export class StnkResolver {
  constructor(
    private readonly stnkService: StnkService,
    private readonly pkbService: PkbService,
    private readonly historyPengisianService: HistoryPengisianService,
  ) {}

  @Query(() => [Stnk], { name: 'stnk' })
  async getAllStnk(@Args() query: FindManyStnkArgs) {
    return await this.stnkService.findAll(query)
  }

  @ResolveField('pkb', () => Pkb)
  async getPkb(@Parent() stnk: Stnk) {
    return await this.pkbService.findOne({
      where: { stnk: { nomor_stnk: stnk.nomor_stnk } },
    })
  }

  @ResolveField('history_pengisian', () => [HistoryPengisian])
  async getHistoryPengisian(@Parent() stnk: Stnk) {
    return await this.historyPengisianService.findAll({
      where: { stnk: { nomor_stnk: stnk.nomor_stnk } },
    })
  }
}

@Resolver(() => HistoryPengisian)
export class HistoryPengisianResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @ResolveField(() => [Spbu], { name: 'spbu' })
  async getAllFiles(@Parent() historyPengisian: HistoryPengisian) {
    return await this.prismaService.spbu.findMany({
      where: { historyPengisian: { every: { id: historyPengisian.id } } },
    })
  }
}
