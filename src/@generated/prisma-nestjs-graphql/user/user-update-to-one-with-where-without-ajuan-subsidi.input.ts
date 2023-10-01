import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAjuan_subsidiInput } from './user-update-without-ajuan-subsidi.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAjuan_subsidiInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAjuan_subsidiInput, {nullable:false})
    @Type(() => UserUpdateWithoutAjuan_subsidiInput)
    data!: UserUpdateWithoutAjuan_subsidiInput;
}
