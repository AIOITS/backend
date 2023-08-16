import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutKtpInput } from './user-create-without-ktp.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutKtpInput } from './user-create-or-connect-without-ktp.input';
import { UserUpsertWithoutKtpInput } from './user-upsert-without-ktp.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutKtpInput } from './user-update-to-one-with-where-without-ktp.input';

@InputType()
export class UserUpdateOneWithoutKtpNestedInput {

    @Field(() => UserCreateWithoutKtpInput, {nullable:true})
    @Type(() => UserCreateWithoutKtpInput)
    create?: UserCreateWithoutKtpInput;

    @Field(() => UserCreateOrConnectWithoutKtpInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutKtpInput)
    connectOrCreate?: UserCreateOrConnectWithoutKtpInput;

    @Field(() => UserUpsertWithoutKtpInput, {nullable:true})
    @Type(() => UserUpsertWithoutKtpInput)
    upsert?: UserUpsertWithoutKtpInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'nik' | 'email' | 'phone'>;

    @Field(() => UserUpdateToOneWithWhereWithoutKtpInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutKtpInput)
    update?: UserUpdateToOneWithWhereWithoutKtpInput;
}
