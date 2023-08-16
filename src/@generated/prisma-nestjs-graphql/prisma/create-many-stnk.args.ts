import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { STNKCreateManyInput } from '../stnk/stnk-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStnkArgs {

    @Field(() => [STNKCreateManyInput], {nullable:false})
    @Type(() => STNKCreateManyInput)
    data!: Array<STNKCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
