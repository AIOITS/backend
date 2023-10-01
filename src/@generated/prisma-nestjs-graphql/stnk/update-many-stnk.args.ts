import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StnkUpdateManyMutationInput } from './stnk-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StnkWhereInput } from './stnk-where.input';

@ArgsType()
export class UpdateManyStnkArgs {

    @Field(() => StnkUpdateManyMutationInput, {nullable:false})
    @Type(() => StnkUpdateManyMutationInput)
    data!: StnkUpdateManyMutationInput;

    @Field(() => StnkWhereInput, {nullable:true})
    @Type(() => StnkWhereInput)
    where?: StnkWhereInput;
}
