import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { KategoriPengisian } from '../prisma/kategori-pengisian.enum';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Device } from '../device/device.model';
import { Spbu } from '../spbu/spbu.model';
import { Bbm } from '../bbm/bbm.model';
import { User } from '../user/user.model';
import { Stnk } from '../stnk/stnk.model';

@ObjectType()
export class HistoryPengisian {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => KategoriPengisian, {nullable:false})
    kategori_pengisian!: keyof typeof KategoriPengisian;

    @Field(() => String, {nullable:false})
    device_id!: string;

    @Field(() => String, {nullable:false})
    jenis_kendaraan!: string;

    @Field(() => Int, {nullable:false})
    spbu_id!: number;

    @Field(() => Float, {nullable:false})
    jumlah!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    bbm_id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => String, {nullable:false})
    nomor_stnk!: string;

    @Field(() => Device, {nullable:false})
    device?: Device;

    @Field(() => Spbu, {nullable:false})
    spbu?: Spbu;

    @Field(() => Bbm, {nullable:true})
    bbm?: Bbm | null;

    @Field(() => User, {nullable:true})
    user?: User | null;

    @Field(() => Stnk, {nullable:false})
    stnk?: Stnk;
}
