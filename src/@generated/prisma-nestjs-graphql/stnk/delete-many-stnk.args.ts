import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StnkWhereInput } from './stnk-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStnkArgs {

    @Field(() => StnkWhereInput, {nullable:true})
    @Type(() => StnkWhereInput)
    where?: StnkWhereInput;
}
