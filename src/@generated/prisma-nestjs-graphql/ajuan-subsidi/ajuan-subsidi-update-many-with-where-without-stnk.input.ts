import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AjuanSubsidiScalarWhereInput } from './ajuan-subsidi-scalar-where.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiUpdateManyMutationInput } from './ajuan-subsidi-update-many-mutation.input';

@InputType()
export class AjuanSubsidiUpdateManyWithWhereWithoutStnkInput {

    @Field(() => AjuanSubsidiScalarWhereInput, {nullable:false})
    @Type(() => AjuanSubsidiScalarWhereInput)
    where!: AjuanSubsidiScalarWhereInput;

    @Field(() => AjuanSubsidiUpdateManyMutationInput, {nullable:false})
    @Type(() => AjuanSubsidiUpdateManyMutationInput)
    data!: AjuanSubsidiUpdateManyMutationInput;
}
