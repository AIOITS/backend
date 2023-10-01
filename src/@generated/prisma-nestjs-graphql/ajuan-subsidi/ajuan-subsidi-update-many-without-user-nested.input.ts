import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AjuanSubsidiCreateWithoutUserInput } from './ajuan-subsidi-create-without-user.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiCreateOrConnectWithoutUserInput } from './ajuan-subsidi-create-or-connect-without-user.input';
import { AjuanSubsidiUpsertWithWhereUniqueWithoutUserInput } from './ajuan-subsidi-upsert-with-where-unique-without-user.input';
import { AjuanSubsidiCreateManyUserInputEnvelope } from './ajuan-subsidi-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input';
import { AjuanSubsidiUpdateWithWhereUniqueWithoutUserInput } from './ajuan-subsidi-update-with-where-unique-without-user.input';
import { AjuanSubsidiUpdateManyWithWhereWithoutUserInput } from './ajuan-subsidi-update-many-with-where-without-user.input';
import { AjuanSubsidiScalarWhereInput } from './ajuan-subsidi-scalar-where.input';

@InputType()
export class AjuanSubsidiUpdateManyWithoutUserNestedInput {

    @Field(() => [AjuanSubsidiCreateWithoutUserInput], {nullable:true})
    @Type(() => AjuanSubsidiCreateWithoutUserInput)
    create?: Array<AjuanSubsidiCreateWithoutUserInput>;

    @Field(() => [AjuanSubsidiCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AjuanSubsidiCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AjuanSubsidiCreateOrConnectWithoutUserInput>;

    @Field(() => [AjuanSubsidiUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AjuanSubsidiUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AjuanSubsidiUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AjuanSubsidiCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AjuanSubsidiCreateManyUserInputEnvelope)
    createMany?: AjuanSubsidiCreateManyUserInputEnvelope;

    @Field(() => [AjuanSubsidiWhereUniqueInput], {nullable:true})
    @Type(() => AjuanSubsidiWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>>;

    @Field(() => [AjuanSubsidiWhereUniqueInput], {nullable:true})
    @Type(() => AjuanSubsidiWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>>;

    @Field(() => [AjuanSubsidiWhereUniqueInput], {nullable:true})
    @Type(() => AjuanSubsidiWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>>;

    @Field(() => [AjuanSubsidiWhereUniqueInput], {nullable:true})
    @Type(() => AjuanSubsidiWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>>;

    @Field(() => [AjuanSubsidiUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AjuanSubsidiUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AjuanSubsidiUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AjuanSubsidiUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AjuanSubsidiUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AjuanSubsidiUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AjuanSubsidiScalarWhereInput], {nullable:true})
    @Type(() => AjuanSubsidiScalarWhereInput)
    deleteMany?: Array<AjuanSubsidiScalarWhereInput>;
}
