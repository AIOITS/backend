import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PKBWhereUniqueInput } from '../pkb/pkb-where-unique.input';
import { Type } from 'class-transformer';
import { PKBCreateInput } from '../pkb/pkb-create.input';
import { PKBUpdateInput } from '../pkb/pkb-update.input';

@ArgsType()
export class UpsertOnePkbArgs {

    @Field(() => PKBWhereUniqueInput, {nullable:false})
    @Type(() => PKBWhereUniqueInput)
    where!: PKBWhereUniqueInput;

    @Field(() => PKBCreateInput, {nullable:false})
    @Type(() => PKBCreateInput)
    create!: PKBCreateInput;

    @Field(() => PKBUpdateInput, {nullable:false})
    @Type(() => PKBUpdateInput)
    update!: PKBUpdateInput;
}
