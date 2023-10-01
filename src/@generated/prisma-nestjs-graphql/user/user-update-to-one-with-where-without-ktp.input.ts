import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutKtpInput } from './user-update-without-ktp.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutKtpInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutKtpInput, {nullable:false})
    @Type(() => UserUpdateWithoutKtpInput)
    data!: UserUpdateWithoutKtpInput;
}
