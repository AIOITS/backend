import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PKBAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    bbknb_pokok?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bbknb_sanksi?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    PKB_pokok?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    PKB_sanksi?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    swdkllj_pokok?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    swdkllj_sanksi?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    administrasi_stnk_pokok?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    administrasi_stnk_sanksi?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    administrasi_tnkb_pokok?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    administrasi_tnkb_sanksi?: keyof typeof SortOrder;
}
