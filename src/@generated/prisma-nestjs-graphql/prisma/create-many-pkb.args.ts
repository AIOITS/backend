import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PKBCreateManyInput } from '../pkb/pkb-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPkbArgs {

    @Field(() => [PKBCreateManyInput], {nullable:false})
    @Type(() => PKBCreateManyInput)
    data!: Array<PKBCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
