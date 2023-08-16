import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SIMWhereInput } from '../sim/sim-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySimArgs {

    @Field(() => SIMWhereInput, {nullable:true})
    @Type(() => SIMWhereInput)
    where?: SIMWhereInput;
}
