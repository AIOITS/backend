import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AjuanSubsidiCreateWithoutStnkInput } from './ajuan-subsidi-create-without-stnk.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiCreateOrConnectWithoutStnkInput } from './ajuan-subsidi-create-or-connect-without-stnk.input';
import { AjuanSubsidiUpsertWithWhereUniqueWithoutStnkInput } from './ajuan-subsidi-upsert-with-where-unique-without-stnk.input';
import { AjuanSubsidiCreateManyStnkInputEnvelope } from './ajuan-subsidi-create-many-stnk-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input';
import { AjuanSubsidiUpdateWithWhereUniqueWithoutStnkInput } from './ajuan-subsidi-update-with-where-unique-without-stnk.input';
import { AjuanSubsidiUpdateManyWithWhereWithoutStnkInput } from './ajuan-subsidi-update-many-with-where-without-stnk.input';
import { AjuanSubsidiScalarWhereInput } from './ajuan-subsidi-scalar-where.input';

@InputType()
export class AjuanSubsidiUncheckedUpdateManyWithoutStnkNestedInput {

    @Field(() => [AjuanSubsidiCreateWithoutStnkInput], {nullable:true})
    @Type(() => AjuanSubsidiCreateWithoutStnkInput)
    create?: Array<AjuanSubsidiCreateWithoutStnkInput>;

    @Field(() => [AjuanSubsidiCreateOrConnectWithoutStnkInput], {nullable:true})
    @Type(() => AjuanSubsidiCreateOrConnectWithoutStnkInput)
    connectOrCreate?: Array<AjuanSubsidiCreateOrConnectWithoutStnkInput>;

    @Field(() => [AjuanSubsidiUpsertWithWhereUniqueWithoutStnkInput], {nullable:true})
    @Type(() => AjuanSubsidiUpsertWithWhereUniqueWithoutStnkInput)
    upsert?: Array<AjuanSubsidiUpsertWithWhereUniqueWithoutStnkInput>;

    @Field(() => AjuanSubsidiCreateManyStnkInputEnvelope, {nullable:true})
    @Type(() => AjuanSubsidiCreateManyStnkInputEnvelope)
    createMany?: AjuanSubsidiCreateManyStnkInputEnvelope;

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

    @Field(() => [AjuanSubsidiUpdateWithWhereUniqueWithoutStnkInput], {nullable:true})
    @Type(() => AjuanSubsidiUpdateWithWhereUniqueWithoutStnkInput)
    update?: Array<AjuanSubsidiUpdateWithWhereUniqueWithoutStnkInput>;

    @Field(() => [AjuanSubsidiUpdateManyWithWhereWithoutStnkInput], {nullable:true})
    @Type(() => AjuanSubsidiUpdateManyWithWhereWithoutStnkInput)
    updateMany?: Array<AjuanSubsidiUpdateManyWithWhereWithoutStnkInput>;

    @Field(() => [AjuanSubsidiScalarWhereInput], {nullable:true})
    @Type(() => AjuanSubsidiScalarWhereInput)
    deleteMany?: Array<AjuanSubsidiScalarWhereInput>;
}
