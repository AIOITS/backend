import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AjuanSubsidiCreateManyInput } from './ajuan-subsidi-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAjuanSubsidiArgs {

    @Field(() => [AjuanSubsidiCreateManyInput], {nullable:false})
    @Type(() => AjuanSubsidiCreateManyInput)
    data!: Array<AjuanSubsidiCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
