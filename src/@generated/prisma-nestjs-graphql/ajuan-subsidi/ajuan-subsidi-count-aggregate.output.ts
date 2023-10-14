import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AjuanSubsidiCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    nomor_stnk!: number;

    @Field(() => Int, {nullable:false})
    jumlah!: number;

    @Field(() => Int, {nullable:false})
    alasan!: number;

    @Field(() => Int, {nullable:false})
    tanggal_pengajuan!: number;

    @Field(() => Int, {nullable:false})
    status_pengajuan!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
