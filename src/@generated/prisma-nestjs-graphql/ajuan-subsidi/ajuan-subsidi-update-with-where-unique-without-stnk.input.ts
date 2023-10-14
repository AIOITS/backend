import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiUpdateWithoutStnkInput } from './ajuan-subsidi-update-without-stnk.input';

@InputType()
export class AjuanSubsidiUpdateWithWhereUniqueWithoutStnkInput {

    @Field(() => AjuanSubsidiWhereUniqueInput, {nullable:false})
    @Type(() => AjuanSubsidiWhereUniqueInput)
    where!: Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>;

    @Field(() => AjuanSubsidiUpdateWithoutStnkInput, {nullable:false})
    @Type(() => AjuanSubsidiUpdateWithoutStnkInput)
    data!: AjuanSubsidiUpdateWithoutStnkInput;
}
