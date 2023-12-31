import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AjuanSubsidiCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nomor_stnk?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jumlah?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alasan?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tanggal_pengajuan?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status_pengajuan?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;
}
