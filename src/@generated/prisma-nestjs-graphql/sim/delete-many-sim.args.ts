import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SimWhereInput } from './sim-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySimArgs {

    @Field(() => SimWhereInput, {nullable:true})
    @Type(() => SimWhereInput)
    where?: SimWhereInput;
}
