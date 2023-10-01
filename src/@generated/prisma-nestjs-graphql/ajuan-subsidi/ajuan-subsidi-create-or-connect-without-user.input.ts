import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiCreateWithoutUserInput } from './ajuan-subsidi-create-without-user.input';

@InputType()
export class AjuanSubsidiCreateOrConnectWithoutUserInput {

    @Field(() => AjuanSubsidiWhereUniqueInput, {nullable:false})
    @Type(() => AjuanSubsidiWhereUniqueInput)
    where!: Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>;

    @Field(() => AjuanSubsidiCreateWithoutUserInput, {nullable:false})
    @Type(() => AjuanSubsidiCreateWithoutUserInput)
    create!: AjuanSubsidiCreateWithoutUserInput;
}
