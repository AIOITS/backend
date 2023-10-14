import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkUpdateWithoutAjuanSubsidiInput } from './stnk-update-without-ajuan-subsidi.input';
import { Type } from 'class-transformer';
import { StnkCreateWithoutAjuanSubsidiInput } from './stnk-create-without-ajuan-subsidi.input';
import { StnkWhereInput } from './stnk-where.input';

@InputType()
export class StnkUpsertWithoutAjuanSubsidiInput {

    @Field(() => StnkUpdateWithoutAjuanSubsidiInput, {nullable:false})
    @Type(() => StnkUpdateWithoutAjuanSubsidiInput)
    update!: StnkUpdateWithoutAjuanSubsidiInput;

    @Field(() => StnkCreateWithoutAjuanSubsidiInput, {nullable:false})
    @Type(() => StnkCreateWithoutAjuanSubsidiInput)
    create!: StnkCreateWithoutAjuanSubsidiInput;

    @Field(() => StnkWhereInput, {nullable:true})
    @Type(() => StnkWhereInput)
    where?: StnkWhereInput;
}
