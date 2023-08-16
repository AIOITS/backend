import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { STNKUpdateManyMutationInput } from '../stnk/stnk-update-many-mutation.input';
import { Type } from 'class-transformer';
import { STNKWhereInput } from '../stnk/stnk-where.input';

@ArgsType()
export class UpdateManyStnkArgs {

    @Field(() => STNKUpdateManyMutationInput, {nullable:false})
    @Type(() => STNKUpdateManyMutationInput)
    data!: STNKUpdateManyMutationInput;

    @Field(() => STNKWhereInput, {nullable:true})
    @Type(() => STNKWhereInput)
    where?: STNKWhereInput;
}
