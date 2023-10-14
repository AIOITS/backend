import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AjuanSubsidiCreateWithoutStnkInput } from './ajuan-subsidi-create-without-stnk.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiCreateOrConnectWithoutStnkInput } from './ajuan-subsidi-create-or-connect-without-stnk.input';
import { AjuanSubsidiCreateManyStnkInputEnvelope } from './ajuan-subsidi-create-many-stnk-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input';

@InputType()
export class AjuanSubsidiCreateNestedManyWithoutStnkInput {

    @Field(() => [AjuanSubsidiCreateWithoutStnkInput], {nullable:true})
    @Type(() => AjuanSubsidiCreateWithoutStnkInput)
    create?: Array<AjuanSubsidiCreateWithoutStnkInput>;

    @Field(() => [AjuanSubsidiCreateOrConnectWithoutStnkInput], {nullable:true})
    @Type(() => AjuanSubsidiCreateOrConnectWithoutStnkInput)
    connectOrCreate?: Array<AjuanSubsidiCreateOrConnectWithoutStnkInput>;

    @Field(() => AjuanSubsidiCreateManyStnkInputEnvelope, {nullable:true})
    @Type(() => AjuanSubsidiCreateManyStnkInputEnvelope)
    createMany?: AjuanSubsidiCreateManyStnkInputEnvelope;

    @Field(() => [AjuanSubsidiWhereUniqueInput], {nullable:true})
    @Type(() => AjuanSubsidiWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>>;
}
