import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SIMCreateWithoutUserInput } from './sim-create-without-user.input';
import { Type } from 'class-transformer';
import { SIMCreateOrConnectWithoutUserInput } from './sim-create-or-connect-without-user.input';
import { SIMUpsertWithWhereUniqueWithoutUserInput } from './sim-upsert-with-where-unique-without-user.input';
import { SIMCreateManyUserInputEnvelope } from './sim-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SIMWhereUniqueInput } from './sim-where-unique.input';
import { SIMUpdateWithWhereUniqueWithoutUserInput } from './sim-update-with-where-unique-without-user.input';
import { SIMUpdateManyWithWhereWithoutUserInput } from './sim-update-many-with-where-without-user.input';
import { SIMScalarWhereInput } from './sim-scalar-where.input';

@InputType()
export class SIMUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [SIMCreateWithoutUserInput], {nullable:true})
    @Type(() => SIMCreateWithoutUserInput)
    create?: Array<SIMCreateWithoutUserInput>;

    @Field(() => [SIMCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => SIMCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<SIMCreateOrConnectWithoutUserInput>;

    @Field(() => [SIMUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SIMUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<SIMUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => SIMCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => SIMCreateManyUserInputEnvelope)
    createMany?: SIMCreateManyUserInputEnvelope;

    @Field(() => [SIMWhereUniqueInput], {nullable:true})
    @Type(() => SIMWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SIMWhereUniqueInput, 'nomor_sim'>>;

    @Field(() => [SIMWhereUniqueInput], {nullable:true})
    @Type(() => SIMWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SIMWhereUniqueInput, 'nomor_sim'>>;

    @Field(() => [SIMWhereUniqueInput], {nullable:true})
    @Type(() => SIMWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SIMWhereUniqueInput, 'nomor_sim'>>;

    @Field(() => [SIMWhereUniqueInput], {nullable:true})
    @Type(() => SIMWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SIMWhereUniqueInput, 'nomor_sim'>>;

    @Field(() => [SIMUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => SIMUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<SIMUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [SIMUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => SIMUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<SIMUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [SIMScalarWhereInput], {nullable:true})
    @Type(() => SIMScalarWhereInput)
    deleteMany?: Array<SIMScalarWhereInput>;
}
