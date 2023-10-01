import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class SpbuScalarWhereWithAggregatesInput {

    @Field(() => [SpbuScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SpbuScalarWhereWithAggregatesInput>;

    @Field(() => [SpbuScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SpbuScalarWhereWithAggregatesInput>;

    @Field(() => [SpbuScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SpbuScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    alamat?: StringWithAggregatesFilter;
}
