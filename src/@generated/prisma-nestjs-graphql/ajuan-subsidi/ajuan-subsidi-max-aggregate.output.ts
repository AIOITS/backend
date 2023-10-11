import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StatusPengajuanSubsidi } from '../prisma/status-pengajuan-subsidi.enum';

@ObjectType()
export class AjuanSubsidiMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    nomor_stnk?: string;

    @Field(() => Int, {nullable:true})
    jumlah?: number;

    @Field(() => String, {nullable:true})
    alasan?: string;

    @Field(() => Date, {nullable:true})
    tanggal_pengajuan?: Date | string;

    @Field(() => StatusPengajuanSubsidi, {nullable:true})
    status_pengajuan?: keyof typeof StatusPengajuanSubsidi;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:true})
    user_id?: number;
}
