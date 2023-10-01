import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAjuan_subsidiInput } from './user-create-without-ajuan-subsidi.input';

@InputType()
export class UserCreateOrConnectWithoutAjuan_subsidiInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'nik' | 'email' | 'phone'>;

    @Field(() => UserCreateWithoutAjuan_subsidiInput, {nullable:false})
    @Type(() => UserCreateWithoutAjuan_subsidiInput)
    create!: UserCreateWithoutAjuan_subsidiInput;
}
