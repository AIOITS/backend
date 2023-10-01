import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { KtpWhereUniqueInput } from './ktp-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneKtpArgs {

    @Field(() => KtpWhereUniqueInput, {nullable:false})
    @Type(() => KtpWhereUniqueInput)
    where!: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>;
}
