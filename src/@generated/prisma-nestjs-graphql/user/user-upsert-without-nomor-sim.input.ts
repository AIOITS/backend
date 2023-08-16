import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutNomor_simInput } from './user-update-without-nomor-sim.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutNomor_simInput } from './user-create-without-nomor-sim.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutNomor_simInput {

    @Field(() => UserUpdateWithoutNomor_simInput, {nullable:false})
    @Type(() => UserUpdateWithoutNomor_simInput)
    update!: UserUpdateWithoutNomor_simInput;

    @Field(() => UserCreateWithoutNomor_simInput, {nullable:false})
    @Type(() => UserCreateWithoutNomor_simInput)
    create!: UserCreateWithoutNomor_simInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
