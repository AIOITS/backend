import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    @Validator.IsNotEmpty()
    nik!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    name!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    phone!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    password!: string;

    @Field(() => Date, {nullable:true})
    @Validator.IsNotEmpty()
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    @Validator.IsNotEmpty()
    updatedAt?: Date | string;
}
