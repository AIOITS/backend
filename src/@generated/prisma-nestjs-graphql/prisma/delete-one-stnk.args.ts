import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { STNKWhereUniqueInput } from '../stnk/stnk-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneStnkArgs {

    @Field(() => STNKWhereUniqueInput, {nullable:false})
    @Type(() => STNKWhereUniqueInput)
    where!: STNKWhereUniqueInput;
}
