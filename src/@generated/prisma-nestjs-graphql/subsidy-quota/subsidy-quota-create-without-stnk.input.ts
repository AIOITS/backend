import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class SubsidyQuotaCreateWithoutStnkInput {

    @Field(() => Float, {nullable:true})
    quota?: number;
}
