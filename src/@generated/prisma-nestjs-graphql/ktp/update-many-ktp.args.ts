import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KtpUpdateManyMutationInput } from './ktp-update-many-mutation.input';
import { Type } from 'class-transformer';
import { KtpWhereInput } from './ktp-where.input';

@ArgsType()
export class UpdateManyKtpArgs {

    @Field(() => KtpUpdateManyMutationInput, {nullable:false})
    @Type(() => KtpUpdateManyMutationInput)
    data!: KtpUpdateManyMutationInput;

    @Field(() => KtpWhereInput, {nullable:true})
    @Type(() => KtpWhereInput)
    where?: KtpWhereInput;
}
