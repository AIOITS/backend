import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KtpCreateWithoutStnkInput } from './ktp-create-without-stnk.input';
import { Type } from 'class-transformer';
import { KtpCreateOrConnectWithoutStnkInput } from './ktp-create-or-connect-without-stnk.input';
import { Prisma } from '@prisma/client';
import { KtpWhereUniqueInput } from './ktp-where-unique.input';

@InputType()
export class KtpCreateNestedOneWithoutStnkInput {

    @Field(() => KtpCreateWithoutStnkInput, {nullable:true})
    @Type(() => KtpCreateWithoutStnkInput)
    create?: KtpCreateWithoutStnkInput;

    @Field(() => KtpCreateOrConnectWithoutStnkInput, {nullable:true})
    @Type(() => KtpCreateOrConnectWithoutStnkInput)
    connectOrCreate?: KtpCreateOrConnectWithoutStnkInput;

    @Field(() => KtpWhereUniqueInput, {nullable:true})
    @Type(() => KtpWhereUniqueInput)
    connect?: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>;
}
