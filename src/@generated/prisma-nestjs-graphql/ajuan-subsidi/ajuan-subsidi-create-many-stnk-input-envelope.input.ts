import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AjuanSubsidiCreateManyStnkInput } from './ajuan-subsidi-create-many-stnk.input';
import { Type } from 'class-transformer';

@InputType()
export class AjuanSubsidiCreateManyStnkInputEnvelope {

    @Field(() => [AjuanSubsidiCreateManyStnkInput], {nullable:false})
    @Type(() => AjuanSubsidiCreateManyStnkInput)
    data!: Array<AjuanSubsidiCreateManyStnkInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
