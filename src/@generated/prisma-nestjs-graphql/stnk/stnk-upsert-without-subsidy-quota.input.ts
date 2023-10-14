import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkUpdateWithoutSubsidy_quotaInput } from './stnk-update-without-subsidy-quota.input';
import { Type } from 'class-transformer';
import { StnkCreateWithoutSubsidy_quotaInput } from './stnk-create-without-subsidy-quota.input';
import { StnkWhereInput } from './stnk-where.input';

@InputType()
export class StnkUpsertWithoutSubsidy_quotaInput {

    @Field(() => StnkUpdateWithoutSubsidy_quotaInput, {nullable:false})
    @Type(() => StnkUpdateWithoutSubsidy_quotaInput)
    update!: StnkUpdateWithoutSubsidy_quotaInput;

    @Field(() => StnkCreateWithoutSubsidy_quotaInput, {nullable:false})
    @Type(() => StnkCreateWithoutSubsidy_quotaInput)
    create!: StnkCreateWithoutSubsidy_quotaInput;

    @Field(() => StnkWhereInput, {nullable:true})
    @Type(() => StnkWhereInput)
    where?: StnkWhereInput;
}
