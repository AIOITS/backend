import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SubsidyQuotaWhereInput } from './subsidy-quota-where.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StnkRelationFilter } from '../stnk/stnk-relation-filter.input';

@InputType()
export class SubsidyQuotaWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    nomor_stnk?: string;

    @Field(() => [SubsidyQuotaWhereInput], {nullable:true})
    AND?: Array<SubsidyQuotaWhereInput>;

    @Field(() => [SubsidyQuotaWhereInput], {nullable:true})
    OR?: Array<SubsidyQuotaWhereInput>;

    @Field(() => [SubsidyQuotaWhereInput], {nullable:true})
    NOT?: Array<SubsidyQuotaWhereInput>;

    @Field(() => FloatFilter, {nullable:true})
    quota?: FloatFilter;

    @Field(() => StnkRelationFilter, {nullable:true})
    stnk?: StnkRelationFilter;
}
