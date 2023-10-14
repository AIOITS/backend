import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StnkOrderByWithRelationInput } from '../stnk/stnk-order-by-with-relation.input';

@InputType()
export class SubsidyQuotaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nomor_stnk?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    quota?: keyof typeof SortOrder;

    @Field(() => StnkOrderByWithRelationInput, {nullable:true})
    stnk?: StnkOrderByWithRelationInput;
}
