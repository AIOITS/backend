import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';

@InputType()
export class SubsidyQuotaScalarWhereWithAggregatesInput {

    @Field(() => [SubsidyQuotaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SubsidyQuotaScalarWhereWithAggregatesInput>;

    @Field(() => [SubsidyQuotaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SubsidyQuotaScalarWhereWithAggregatesInput>;

    @Field(() => [SubsidyQuotaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SubsidyQuotaScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    nomor_stnk?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    quota?: FloatWithAggregatesFilter;
}
