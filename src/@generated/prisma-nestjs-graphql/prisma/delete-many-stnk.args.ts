import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { STNKWhereInput } from '../stnk/stnk-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStnkArgs {

    @Field(() => STNKWhereInput, {nullable:true})
    @Type(() => STNKWhereInput)
    where?: STNKWhereInput;
}
