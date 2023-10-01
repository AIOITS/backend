import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KtpCreateWithoutUserInput } from './ktp-create-without-user.input';
import { Type } from 'class-transformer';
import { KtpCreateOrConnectWithoutUserInput } from './ktp-create-or-connect-without-user.input';
import { KtpUpsertWithoutUserInput } from './ktp-upsert-without-user.input';
import { Prisma } from '@prisma/client';
import { KtpWhereUniqueInput } from './ktp-where-unique.input';
import { KtpUpdateToOneWithWhereWithoutUserInput } from './ktp-update-to-one-with-where-without-user.input';

@InputType()
export class KtpUpdateOneRequiredWithoutUserNestedInput {

    @Field(() => KtpCreateWithoutUserInput, {nullable:true})
    @Type(() => KtpCreateWithoutUserInput)
    create?: KtpCreateWithoutUserInput;

    @Field(() => KtpCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => KtpCreateOrConnectWithoutUserInput)
    connectOrCreate?: KtpCreateOrConnectWithoutUserInput;

    @Field(() => KtpUpsertWithoutUserInput, {nullable:true})
    @Type(() => KtpUpsertWithoutUserInput)
    upsert?: KtpUpsertWithoutUserInput;

    @Field(() => KtpWhereUniqueInput, {nullable:true})
    @Type(() => KtpWhereUniqueInput)
    connect?: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>;

    @Field(() => KtpUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => KtpUpdateToOneWithWhereWithoutUserInput)
    update?: KtpUpdateToOneWithWhereWithoutUserInput;
}
