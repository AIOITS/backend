import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkWhereInput } from './stnk-where.input';
import { Type } from 'class-transformer';
import { StnkUpdateWithoutSubsidy_quotaInput } from './stnk-update-without-subsidy-quota.input';

@InputType()
export class StnkUpdateToOneWithWhereWithoutSubsidy_quotaInput {

    @Field(() => StnkWhereInput, {nullable:true})
    @Type(() => StnkWhereInput)
    where?: StnkWhereInput;

    @Field(() => StnkUpdateWithoutSubsidy_quotaInput, {nullable:false})
    @Type(() => StnkUpdateWithoutSubsidy_quotaInput)
    data!: StnkUpdateWithoutSubsidy_quotaInput;
}
