import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiCreateInput } from './ajuan-subsidi-create.input';
import { AjuanSubsidiUpdateInput } from './ajuan-subsidi-update.input';

@ArgsType()
export class UpsertOneAjuanSubsidiArgs {

    @Field(() => AjuanSubsidiWhereUniqueInput, {nullable:false})
    @Type(() => AjuanSubsidiWhereUniqueInput)
    where!: Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>;

    @Field(() => AjuanSubsidiCreateInput, {nullable:false})
    @Type(() => AjuanSubsidiCreateInput)
    create!: AjuanSubsidiCreateInput;

    @Field(() => AjuanSubsidiUpdateInput, {nullable:false})
    @Type(() => AjuanSubsidiUpdateInput)
    update!: AjuanSubsidiUpdateInput;
}
