import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { JenisKelamin } from '../prisma/jenis-kelamin.enum';
import { GolonganDarah } from '../prisma/golongan-darah.enum';
import { Agama } from '../prisma/agama.enum';
import { StatusPerkawinan } from '../prisma/status-perkawinan.enum';
import { Sim } from '../sim/sim.model';
import { Stnk } from '../stnk/stnk.model';
import { User } from '../user/user.model';
import { KtpCount } from './ktp-count.output';

@ObjectType()
export class Ktp {

    @Field(() => ID, {nullable:false})
    nik!: string;

    @Field(() => String, {nullable:false})
    nama!: string;

    @Field(() => String, {nullable:false})
    tempat_lahir!: string;

    @Field(() => Date, {nullable:false})
    tanggal_lahir!: Date;

    @Field(() => String, {nullable:false})
    alamat!: string;

    @Field(() => Int, {nullable:false})
    rt!: number;

    @Field(() => Int, {nullable:false})
    rw!: number;

    @Field(() => String, {nullable:false})
    kelurahan_desa!: string;

    @Field(() => String, {nullable:false})
    kecamatan!: string;

    @Field(() => String, {nullable:false})
    kabupaten_kota!: string;

    @Field(() => String, {nullable:false})
    provinsi!: string;

    @Field(() => JenisKelamin, {nullable:false})
    jenis_kelamin!: keyof typeof JenisKelamin;

    @Field(() => GolonganDarah, {nullable:false})
    golongan_darah!: keyof typeof GolonganDarah;

    @Field(() => Agama, {nullable:false})
    agama!: keyof typeof Agama;

    @Field(() => StatusPerkawinan, {nullable:false})
    status_perkawinan!: keyof typeof StatusPerkawinan;

    @Field(() => String, {nullable:false})
    pekerjaan!: string;

    @Field(() => String, {nullable:false})
    kewarganegaraan!: string;

    @Field(() => Date, {nullable:false})
    tanggal_terbit!: Date;

    @Field(() => [Sim], {nullable:true})
    sim?: Array<Sim>;

    @Field(() => [Stnk], {nullable:true})
    stnk?: Array<Stnk>;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => KtpCount, {nullable:false})
    _count?: KtpCount;
}
