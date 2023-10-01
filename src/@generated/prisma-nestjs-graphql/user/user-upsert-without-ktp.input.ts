import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutKtpInput } from './user-update-without-ktp.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutKtpInput } from './user-create-without-ktp.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutKtpInput {

    @Field(() => UserUpdateWithoutKtpInput, {nullable:false})
    @Type(() => UserUpdateWithoutKtpInput)
    update!: UserUpdateWithoutKtpInput;

    @Field(() => UserCreateWithoutKtpInput, {nullable:false})
    @Type(() => UserCreateWithoutKtpInput)
    create!: UserCreateWithoutKtpInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
