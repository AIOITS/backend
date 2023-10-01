import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PkbCountOrderByAggregateInput } from './pkb-count-order-by-aggregate.input';
import { PkbAvgOrderByAggregateInput } from './pkb-avg-order-by-aggregate.input';
import { PkbMaxOrderByAggregateInput } from './pkb-max-order-by-aggregate.input';
import { PkbMinOrderByAggregateInput } from './pkb-min-order-by-aggregate.input';
import { PkbSumOrderByAggregateInput } from './pkb-sum-order-by-aggregate.input';

@InputType()
export class PkbOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    nomor_pkb?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status_pajak?: keyof typeof SortOrder;

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

    @Field(() => PkbCountOrderByAggregateInput, {nullable:true})
    _count?: PkbCountOrderByAggregateInput;

    @Field(() => PkbAvgOrderByAggregateInput, {nullable:true})
    _avg?: PkbAvgOrderByAggregateInput;

    @Field(() => PkbMaxOrderByAggregateInput, {nullable:true})
    _max?: PkbMaxOrderByAggregateInput;

    @Field(() => PkbMinOrderByAggregateInput, {nullable:true})
    _min?: PkbMinOrderByAggregateInput;

    @Field(() => PkbSumOrderByAggregateInput, {nullable:true})
    _sum?: PkbSumOrderByAggregateInput;
}
