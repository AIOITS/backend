import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AjuanSubsidiCreateInput } from './ajuan-subsidi-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAjuanSubsidiArgs {

    @Field(() => AjuanSubsidiCreateInput, {nullable:false})
    @Type(() => AjuanSubsidiCreateInput)
    data!: AjuanSubsidiCreateInput;
}
