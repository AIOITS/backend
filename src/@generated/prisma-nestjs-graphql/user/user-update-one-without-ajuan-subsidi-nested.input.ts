import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAjuan_subsidiInput } from './user-create-without-ajuan-subsidi.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAjuan_subsidiInput } from './user-create-or-connect-without-ajuan-subsidi.input';
import { UserUpsertWithoutAjuan_subsidiInput } from './user-upsert-without-ajuan-subsidi.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAjuan_subsidiInput } from './user-update-to-one-with-where-without-ajuan-subsidi.input';

@InputType()
export class UserUpdateOneWithoutAjuan_subsidiNestedInput {

    @Field(() => UserCreateWithoutAjuan_subsidiInput, {nullable:true})
    @Type(() => UserCreateWithoutAjuan_subsidiInput)
    create?: UserCreateWithoutAjuan_subsidiInput;

    @Field(() => UserCreateOrConnectWithoutAjuan_subsidiInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAjuan_subsidiInput)
    connectOrCreate?: UserCreateOrConnectWithoutAjuan_subsidiInput;

    @Field(() => UserUpsertWithoutAjuan_subsidiInput, {nullable:true})
    @Type(() => UserUpsertWithoutAjuan_subsidiInput)
    upsert?: UserUpsertWithoutAjuan_subsidiInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'nik' | 'email' | 'phone'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAjuan_subsidiInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAjuan_subsidiInput)
    update?: UserUpdateToOneWithWhereWithoutAjuan_subsidiInput;
}
