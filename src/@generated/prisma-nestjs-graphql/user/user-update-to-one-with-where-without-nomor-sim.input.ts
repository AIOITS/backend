import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutNomor_simInput } from './user-update-without-nomor-sim.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutNomor_simInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutNomor_simInput, {nullable:false})
    @Type(() => UserUpdateWithoutNomor_simInput)
    data!: UserUpdateWithoutNomor_simInput;
}
