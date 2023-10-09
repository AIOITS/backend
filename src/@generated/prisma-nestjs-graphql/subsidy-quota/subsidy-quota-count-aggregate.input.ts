import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SubsidyQuotaCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    nomor_stnk?: true;

    @Field(() => Boolean, {nullable:true})
    quota?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
