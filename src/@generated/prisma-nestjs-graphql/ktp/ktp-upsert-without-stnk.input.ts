import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KtpUpdateWithoutStnkInput } from './ktp-update-without-stnk.input';
import { Type } from 'class-transformer';
import { KtpCreateWithoutStnkInput } from './ktp-create-without-stnk.input';
import { KtpWhereInput } from './ktp-where.input';

@InputType()
export class KtpUpsertWithoutStnkInput {

    @Field(() => KtpUpdateWithoutStnkInput, {nullable:false})
    @Type(() => KtpUpdateWithoutStnkInput)
    update!: KtpUpdateWithoutStnkInput;

    @Field(() => KtpCreateWithoutStnkInput, {nullable:false})
    @Type(() => KtpCreateWithoutStnkInput)
    create!: KtpCreateWithoutStnkInput;

    @Field(() => KtpWhereInput, {nullable:true})
    @Type(() => KtpWhereInput)
    where?: KtpWhereInput;
}
