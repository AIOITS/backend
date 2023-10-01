import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiUpdateWithoutUserInput } from './ajuan-subsidi-update-without-user.input';
import { AjuanSubsidiCreateWithoutUserInput } from './ajuan-subsidi-create-without-user.input';

@InputType()
export class AjuanSubsidiUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => AjuanSubsidiWhereUniqueInput, {nullable:false})
    @Type(() => AjuanSubsidiWhereUniqueInput)
    where!: Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>;

    @Field(() => AjuanSubsidiUpdateWithoutUserInput, {nullable:false})
    @Type(() => AjuanSubsidiUpdateWithoutUserInput)
    update!: AjuanSubsidiUpdateWithoutUserInput;

    @Field(() => AjuanSubsidiCreateWithoutUserInput, {nullable:false})
    @Type(() => AjuanSubsidiCreateWithoutUserInput)
    create!: AjuanSubsidiCreateWithoutUserInput;
}
