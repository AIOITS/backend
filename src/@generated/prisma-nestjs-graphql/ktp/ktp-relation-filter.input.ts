import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KtpWhereInput } from './ktp-where.input';

@InputType()
export class KtpRelationFilter {

    @Field(() => KtpWhereInput, {nullable:true})
    is?: KtpWhereInput;

    @Field(() => KtpWhereInput, {nullable:true})
    isNot?: KtpWhereInput;
}
