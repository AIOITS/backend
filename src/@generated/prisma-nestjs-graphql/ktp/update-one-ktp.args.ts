import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KtpUpdateInput } from './ktp-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { KtpWhereUniqueInput } from './ktp-where-unique.input';

@ArgsType()
export class UpdateOneKtpArgs {

    @Field(() => KtpUpdateInput, {nullable:false})
    @Type(() => KtpUpdateInput)
    data!: KtpUpdateInput;

    @Field(() => KtpWhereUniqueInput, {nullable:false})
    @Type(() => KtpWhereUniqueInput)
    where!: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>;
}
