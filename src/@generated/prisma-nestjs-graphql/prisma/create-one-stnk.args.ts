import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { STNKCreateInput } from '../stnk/stnk-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStnkArgs {

    @Field(() => STNKCreateInput, {nullable:false})
    @Type(() => STNKCreateInput)
    data!: STNKCreateInput;
}
