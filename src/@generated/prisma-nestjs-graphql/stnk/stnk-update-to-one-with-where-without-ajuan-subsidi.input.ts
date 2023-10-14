import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkWhereInput } from './stnk-where.input';
import { Type } from 'class-transformer';
import { StnkUpdateWithoutAjuanSubsidiInput } from './stnk-update-without-ajuan-subsidi.input';

@InputType()
export class StnkUpdateToOneWithWhereWithoutAjuanSubsidiInput {

    @Field(() => StnkWhereInput, {nullable:true})
    @Type(() => StnkWhereInput)
    where?: StnkWhereInput;

    @Field(() => StnkUpdateWithoutAjuanSubsidiInput, {nullable:false})
    @Type(() => StnkUpdateWithoutAjuanSubsidiInput)
    data!: StnkUpdateWithoutAjuanSubsidiInput;
}
