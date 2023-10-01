import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { JenisSim } from '../prisma/jenis-sim.enum';
import { Int } from '@nestjs/graphql';
import { Ktp } from '../ktp/ktp.model';

@ObjectType()
export class Sim {

    @Field(() => String, {nullable:false})
    uid!: string;

    @Field(() => ID, {nullable:false})
    nomor_sim!: string;

    @Field(() => JenisSim, {nullable:false})
    jenis_sim!: keyof typeof JenisSim;

    @Field(() => String, {nullable:false})
    nama!: string;

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
    kabupaten!: string;

    @Field(() => String, {nullable:false})
    pekerjaan!: string;

    @Field(() => String, {nullable:false})
    kabupaten_terbit!: string;

    @Field(() => Date, {nullable:false})
    tanggal_terbit!: Date;

    @Field(() => String, {nullable:false})
    penerbit!: string;

    @Field(() => Date, {nullable:false})
    berlaku_sampai!: Date;

    @Field(() => String, {nullable:true})
    nik!: string | null;

    @Field(() => Ktp, {nullable:true})
    ktp?: Ktp | null;
}
