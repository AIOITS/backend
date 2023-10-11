import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AjuanSubsidiMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    nomor_stnk?: true;

    @Field(() => Boolean, {nullable:true})
    jumlah?: true;

    @Field(() => Boolean, {nullable:true})
    alasan?: true;

    @Field(() => Boolean, {nullable:true})
    tanggal_pengajuan?: true;

    @Field(() => Boolean, {nullable:true})
    status_pengajuan?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    user_id?: true;
}
