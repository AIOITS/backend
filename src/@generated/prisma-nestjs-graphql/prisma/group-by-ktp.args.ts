import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KTPWhereInput } from '../ktp/ktp-where.input';
import { Type } from 'class-transformer';
import { KTPOrderByWithAggregationInput } from '../ktp/ktp-order-by-with-aggregation.input';
import { KTPScalarFieldEnum } from '../ktp/ktp-scalar-field.enum';
import { KTPScalarWhereWithAggregatesInput } from '../ktp/ktp-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByKtpArgs {

    @Field(() => KTPWhereInput, {nullable:true})
    @Type(() => KTPWhereInput)
    where?: KTPWhereInput;

    @Field(() => [KTPOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<KTPOrderByWithAggregationInput>;

    @Field(() => [KTPScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof KTPScalarFieldEnum>;

    @Field(() => KTPScalarWhereWithAggregatesInput, {nullable:true})
    having?: KTPScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
