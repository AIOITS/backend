import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SimCreateManyInput } from './sim-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySimArgs {

    @Field(() => [SimCreateManyInput], {nullable:false})
    @Type(() => SimCreateManyInput)
    data!: Array<SimCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
