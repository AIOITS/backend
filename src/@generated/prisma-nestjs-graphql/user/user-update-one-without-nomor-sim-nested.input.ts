import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNomor_simInput } from './user-create-without-nomor-sim.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutNomor_simInput } from './user-create-or-connect-without-nomor-sim.input';
import { UserUpsertWithoutNomor_simInput } from './user-upsert-without-nomor-sim.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutNomor_simInput } from './user-update-to-one-with-where-without-nomor-sim.input';

@InputType()
export class UserUpdateOneWithoutNomor_simNestedInput {

    @Field(() => UserCreateWithoutNomor_simInput, {nullable:true})
    @Type(() => UserCreateWithoutNomor_simInput)
    create?: UserCreateWithoutNomor_simInput;

    @Field(() => UserCreateOrConnectWithoutNomor_simInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutNomor_simInput)
    connectOrCreate?: UserCreateOrConnectWithoutNomor_simInput;

    @Field(() => UserUpsertWithoutNomor_simInput, {nullable:true})
    @Type(() => UserUpsertWithoutNomor_simInput)
    upsert?: UserUpsertWithoutNomor_simInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'nik' | 'email' | 'phone'>;

    @Field(() => UserUpdateToOneWithWhereWithoutNomor_simInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutNomor_simInput)
    update?: UserUpdateToOneWithWhereWithoutNomor_simInput;
}
