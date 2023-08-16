import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutKtpInput } from './user-create-without-ktp.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutKtpInput } from './user-create-or-connect-without-ktp.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedOneWithoutKtpInput {

    @Field(() => UserCreateWithoutKtpInput, {nullable:true})
    @Type(() => UserCreateWithoutKtpInput)
    create?: UserCreateWithoutKtpInput;

    @Field(() => UserCreateOrConnectWithoutKtpInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutKtpInput)
    connectOrCreate?: UserCreateOrConnectWithoutKtpInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'nik' | 'email' | 'phone'>;
}
