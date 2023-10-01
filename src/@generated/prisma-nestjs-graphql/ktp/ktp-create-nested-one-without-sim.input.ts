import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KtpCreateWithoutSimInput } from './ktp-create-without-sim.input';
import { Type } from 'class-transformer';
import { KtpCreateOrConnectWithoutSimInput } from './ktp-create-or-connect-without-sim.input';
import { Prisma } from '@prisma/client';
import { KtpWhereUniqueInput } from './ktp-where-unique.input';

@InputType()
export class KtpCreateNestedOneWithoutSimInput {

    @Field(() => KtpCreateWithoutSimInput, {nullable:true})
    @Type(() => KtpCreateWithoutSimInput)
    create?: KtpCreateWithoutSimInput;

    @Field(() => KtpCreateOrConnectWithoutSimInput, {nullable:true})
    @Type(() => KtpCreateOrConnectWithoutSimInput)
    connectOrCreate?: KtpCreateOrConnectWithoutSimInput;

    @Field(() => KtpWhereUniqueInput, {nullable:true})
    @Type(() => KtpWhereUniqueInput)
    connect?: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>;
}
