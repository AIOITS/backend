import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHistory_pengisianInput } from './user-create-without-history-pengisian.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHistory_pengisianInput } from './user-create-or-connect-without-history-pengisian.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutHistory_pengisianInput {

    @Field(() => UserCreateWithoutHistory_pengisianInput, {nullable:true})
    @Type(() => UserCreateWithoutHistory_pengisianInput)
    create?: UserCreateWithoutHistory_pengisianInput;

    @Field(() => UserCreateOrConnectWithoutHistory_pengisianInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHistory_pengisianInput)
    connectOrCreate?: UserCreateOrConnectWithoutHistory_pengisianInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'nik' | 'email' | 'phone'>;
}
