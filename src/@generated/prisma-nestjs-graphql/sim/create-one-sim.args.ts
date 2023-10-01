import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SimCreateInput } from './sim-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSimArgs {

    @Field(() => SimCreateInput, {nullable:false})
    @Type(() => SimCreateInput)
    data!: SimCreateInput;
}
