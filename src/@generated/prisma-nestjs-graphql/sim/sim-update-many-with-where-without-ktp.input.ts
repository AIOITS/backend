import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SimScalarWhereInput } from './sim-scalar-where.input';
import { Type } from 'class-transformer';
import { SimUpdateManyMutationInput } from './sim-update-many-mutation.input';

@InputType()
export class SimUpdateManyWithWhereWithoutKtpInput {

    @Field(() => SimScalarWhereInput, {nullable:false})
    @Type(() => SimScalarWhereInput)
    where!: SimScalarWhereInput;

    @Field(() => SimUpdateManyMutationInput, {nullable:false})
    @Type(() => SimUpdateManyMutationInput)
    data!: SimUpdateManyMutationInput;
}
