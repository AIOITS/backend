import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkScalarWhereInput } from './stnk-scalar-where.input';
import { Type } from 'class-transformer';
import { StnkUpdateManyMutationInput } from './stnk-update-many-mutation.input';

@InputType()
export class StnkUpdateManyWithWhereWithoutKtpInput {

    @Field(() => StnkScalarWhereInput, {nullable:false})
    @Type(() => StnkScalarWhereInput)
    where!: StnkScalarWhereInput;

    @Field(() => StnkUpdateManyMutationInput, {nullable:false})
    @Type(() => StnkUpdateManyMutationInput)
    data!: StnkUpdateManyMutationInput;
}
