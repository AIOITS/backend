import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KTPCreateInput } from '../ktp/ktp-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneKtpArgs {

    @Field(() => KTPCreateInput, {nullable:false})
    @Type(() => KTPCreateInput)
    data!: KTPCreateInput;
}
