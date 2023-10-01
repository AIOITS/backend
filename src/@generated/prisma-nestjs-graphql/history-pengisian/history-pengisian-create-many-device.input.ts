import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { KategoriPengisian } from '../prisma/kategori-pengisian.enum';
import { Float } from '@nestjs/graphql';

@InputType()
export class HistoryPengisianCreateManyDeviceInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => KategoriPengisian, {nullable:false})
    kategori_pengisian!: keyof typeof KategoriPengisian;

    @Field(() => String, {nullable:false})
    jenis_kendaraan!: string;

    @Field(() => Int, {nullable:false})
    spbu_id!: number;

    @Field(() => Float, {nullable:false})
    jumlah!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    bbm_id!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => String, {nullable:false})
    nomor_stnk!: string;
}
