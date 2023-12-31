import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { StatusPengajuanSubsidi } from '../prisma/status-pengajuan-subsidi.enum';

@InputType()
export class AjuanSubsidiUncheckedCreateWithoutDokumen_pendukungInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    nomor_stnk!: string;

    @Field(() => Int, {nullable:false})
    @Validator.IsNotEmpty()
    jumlah!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    alasan!: string;

    @Field(() => Date, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsISO8601({ strict: true })
    tanggal_pengajuan!: Date | string;

    @Field(() => StatusPengajuanSubsidi, {nullable:true})
    status_pengajuan?: keyof typeof StatusPengajuanSubsidi;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    user_id?: number;
}
