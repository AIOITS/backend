import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PkbWhereInput } from './pkb-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPkbArgs {

    @Field(() => PkbWhereInput, {nullable:true})
    @Type(() => PkbWhereInput)
    where?: PkbWhereInput;
}
