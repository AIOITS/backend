import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiCreateWithoutStnkInput } from './ajuan-subsidi-create-without-stnk.input';

@InputType()
export class AjuanSubsidiCreateOrConnectWithoutStnkInput {

    @Field(() => AjuanSubsidiWhereUniqueInput, {nullable:false})
    @Type(() => AjuanSubsidiWhereUniqueInput)
    where!: Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>;

    @Field(() => AjuanSubsidiCreateWithoutStnkInput, {nullable:false})
    @Type(() => AjuanSubsidiCreateWithoutStnkInput)
    create!: AjuanSubsidiCreateWithoutStnkInput;
}
