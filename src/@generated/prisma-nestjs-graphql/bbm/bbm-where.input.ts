import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumBbmCategoryFilter } from '../prisma/enum-bbm-category-filter.input';
import { HistoryPengisianListRelationFilter } from '../history-pengisian/history-pengisian-list-relation-filter.input';

@InputType()
export class BbmWhereInput {

    @Field(() => [BbmWhereInput], {nullable:true})
    AND?: Array<BbmWhereInput>;

    @Field(() => [BbmWhereInput], {nullable:true})
    OR?: Array<BbmWhereInput>;

    @Field(() => [BbmWhereInput], {nullable:true})
    NOT?: Array<BbmWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    type?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    price_per_liter?: FloatFilter;

    @Field(() => BoolFilter, {nullable:true})
    is_subsidi?: BoolFilter;

    @Field(() => EnumBbmCategoryFilter, {nullable:true})
    category?: EnumBbmCategoryFilter;

    @Field(() => HistoryPengisianListRelationFilter, {nullable:true})
    HistoryPengisian?: HistoryPengisianListRelationFilter;
}
