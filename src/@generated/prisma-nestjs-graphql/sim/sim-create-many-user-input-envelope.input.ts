import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SIMCreateManyUserInput } from './sim-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class SIMCreateManyUserInputEnvelope {

    @Field(() => [SIMCreateManyUserInput], {nullable:false})
    @Type(() => SIMCreateManyUserInput)
    data!: Array<SIMCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
