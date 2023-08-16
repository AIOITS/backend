import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PKBUpdateManyMutationInput } from '../pkb/pkb-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PKBWhereInput } from '../pkb/pkb-where.input';

@ArgsType()
export class UpdateManyPkbArgs {

    @Field(() => PKBUpdateManyMutationInput, {nullable:false})
    @Type(() => PKBUpdateManyMutationInput)
    data!: PKBUpdateManyMutationInput;

    @Field(() => PKBWhereInput, {nullable:true})
    @Type(() => PKBWhereInput)
    where?: PKBWhereInput;
}
