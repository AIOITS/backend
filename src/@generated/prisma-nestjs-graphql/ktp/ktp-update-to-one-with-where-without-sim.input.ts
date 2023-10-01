import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KtpWhereInput } from './ktp-where.input';
import { Type } from 'class-transformer';
import { KtpUpdateWithoutSimInput } from './ktp-update-without-sim.input';

@InputType()
export class KtpUpdateToOneWithWhereWithoutSimInput {

    @Field(() => KtpWhereInput, {nullable:true})
    @Type(() => KtpWhereInput)
    where?: KtpWhereInput;

    @Field(() => KtpUpdateWithoutSimInput, {nullable:false})
    @Type(() => KtpUpdateWithoutSimInput)
    data!: KtpUpdateWithoutSimInput;
}
