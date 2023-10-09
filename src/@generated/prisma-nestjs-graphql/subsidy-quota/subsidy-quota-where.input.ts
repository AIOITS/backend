import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { StnkRelationFilter } from '../stnk/stnk-relation-filter.input';

@InputType()
export class SubsidyQuotaWhereInput {

    @Field(() => [SubsidyQuotaWhereInput], {nullable:true})
    AND?: Array<SubsidyQuotaWhereInput>;

    @Field(() => [SubsidyQuotaWhereInput], {nullable:true})
    OR?: Array<SubsidyQuotaWhereInput>;

    @Field(() => [SubsidyQuotaWhereInput], {nullable:true})
    NOT?: Array<SubsidyQuotaWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    nomor_stnk?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    quota?: FloatFilter;

    @Field(() => StnkRelationFilter, {nullable:true})
    stnk?: StnkRelationFilter;
}
