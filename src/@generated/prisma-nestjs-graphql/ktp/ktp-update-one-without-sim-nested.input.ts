import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KtpCreateWithoutSimInput } from './ktp-create-without-sim.input';
import { Type } from 'class-transformer';
import { KtpCreateOrConnectWithoutSimInput } from './ktp-create-or-connect-without-sim.input';
import { KtpUpsertWithoutSimInput } from './ktp-upsert-without-sim.input';
import { KtpWhereInput } from './ktp-where.input';
import { Prisma } from '@prisma/client';
import { KtpWhereUniqueInput } from './ktp-where-unique.input';
import { KtpUpdateToOneWithWhereWithoutSimInput } from './ktp-update-to-one-with-where-without-sim.input';

@InputType()
export class KtpUpdateOneWithoutSimNestedInput {

    @Field(() => KtpCreateWithoutSimInput, {nullable:true})
    @Type(() => KtpCreateWithoutSimInput)
    create?: KtpCreateWithoutSimInput;

    @Field(() => KtpCreateOrConnectWithoutSimInput, {nullable:true})
    @Type(() => KtpCreateOrConnectWithoutSimInput)
    connectOrCreate?: KtpCreateOrConnectWithoutSimInput;

    @Field(() => KtpUpsertWithoutSimInput, {nullable:true})
    @Type(() => KtpUpsertWithoutSimInput)
    upsert?: KtpUpsertWithoutSimInput;

    @Field(() => KtpWhereInput, {nullable:true})
    @Type(() => KtpWhereInput)
    disconnect?: KtpWhereInput;

    @Field(() => KtpWhereInput, {nullable:true})
    @Type(() => KtpWhereInput)
    delete?: KtpWhereInput;

    @Field(() => KtpWhereUniqueInput, {nullable:true})
    @Type(() => KtpWhereUniqueInput)
    connect?: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>;

    @Field(() => KtpUpdateToOneWithWhereWithoutSimInput, {nullable:true})
    @Type(() => KtpUpdateToOneWithWhereWithoutSimInput)
    update?: KtpUpdateToOneWithWhereWithoutSimInput;
}
