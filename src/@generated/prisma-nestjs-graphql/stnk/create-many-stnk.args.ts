import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StnkCreateManyInput } from './stnk-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStnkArgs {

    @Field(() => [StnkCreateManyInput], {nullable:false})
    @Type(() => StnkCreateManyInput)
    data!: Array<StnkCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
