import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SIMScalarWhereInput } from './sim-scalar-where.input';
import { Type } from 'class-transformer';
import { SIMUpdateManyMutationInput } from './sim-update-many-mutation.input';

@InputType()
export class SIMUpdateManyWithWhereWithoutUserInput {

    @Field(() => SIMScalarWhereInput, {nullable:false})
    @Type(() => SIMScalarWhereInput)
    where!: SIMScalarWhereInput;

    @Field(() => SIMUpdateManyMutationInput, {nullable:false})
    @Type(() => SIMUpdateManyMutationInput)
    data!: SIMUpdateManyMutationInput;
}
