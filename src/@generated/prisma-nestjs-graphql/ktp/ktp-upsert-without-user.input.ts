import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KtpUpdateWithoutUserInput } from './ktp-update-without-user.input';
import { Type } from 'class-transformer';
import { KtpCreateWithoutUserInput } from './ktp-create-without-user.input';
import { KtpWhereInput } from './ktp-where.input';

@InputType()
export class KtpUpsertWithoutUserInput {

    @Field(() => KtpUpdateWithoutUserInput, {nullable:false})
    @Type(() => KtpUpdateWithoutUserInput)
    update!: KtpUpdateWithoutUserInput;

    @Field(() => KtpCreateWithoutUserInput, {nullable:false})
    @Type(() => KtpCreateWithoutUserInput)
    create!: KtpCreateWithoutUserInput;

    @Field(() => KtpWhereInput, {nullable:true})
    @Type(() => KtpWhereInput)
    where?: KtpWhereInput;
}
