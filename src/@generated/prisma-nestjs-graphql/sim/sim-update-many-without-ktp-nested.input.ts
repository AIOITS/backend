import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SimCreateWithoutKtpInput } from './sim-create-without-ktp.input';
import { Type } from 'class-transformer';
import { SimCreateOrConnectWithoutKtpInput } from './sim-create-or-connect-without-ktp.input';
import { SimUpsertWithWhereUniqueWithoutKtpInput } from './sim-upsert-with-where-unique-without-ktp.input';
import { SimCreateManyKtpInputEnvelope } from './sim-create-many-ktp-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SimWhereUniqueInput } from './sim-where-unique.input';
import { SimUpdateWithWhereUniqueWithoutKtpInput } from './sim-update-with-where-unique-without-ktp.input';
import { SimUpdateManyWithWhereWithoutKtpInput } from './sim-update-many-with-where-without-ktp.input';
import { SimScalarWhereInput } from './sim-scalar-where.input';

@InputType()
export class SimUpdateManyWithoutKtpNestedInput {

    @Field(() => [SimCreateWithoutKtpInput], {nullable:true})
    @Type(() => SimCreateWithoutKtpInput)
    create?: Array<SimCreateWithoutKtpInput>;

    @Field(() => [SimCreateOrConnectWithoutKtpInput], {nullable:true})
    @Type(() => SimCreateOrConnectWithoutKtpInput)
    connectOrCreate?: Array<SimCreateOrConnectWithoutKtpInput>;

    @Field(() => [SimUpsertWithWhereUniqueWithoutKtpInput], {nullable:true})
    @Type(() => SimUpsertWithWhereUniqueWithoutKtpInput)
    upsert?: Array<SimUpsertWithWhereUniqueWithoutKtpInput>;

    @Field(() => SimCreateManyKtpInputEnvelope, {nullable:true})
    @Type(() => SimCreateManyKtpInputEnvelope)
    createMany?: SimCreateManyKtpInputEnvelope;

    @Field(() => [SimWhereUniqueInput], {nullable:true})
    @Type(() => SimWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>>;

    @Field(() => [SimWhereUniqueInput], {nullable:true})
    @Type(() => SimWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>>;

    @Field(() => [SimWhereUniqueInput], {nullable:true})
    @Type(() => SimWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>>;

    @Field(() => [SimWhereUniqueInput], {nullable:true})
    @Type(() => SimWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>>;

    @Field(() => [SimUpdateWithWhereUniqueWithoutKtpInput], {nullable:true})
    @Type(() => SimUpdateWithWhereUniqueWithoutKtpInput)
    update?: Array<SimUpdateWithWhereUniqueWithoutKtpInput>;

    @Field(() => [SimUpdateManyWithWhereWithoutKtpInput], {nullable:true})
    @Type(() => SimUpdateManyWithWhereWithoutKtpInput)
    updateMany?: Array<SimUpdateManyWithWhereWithoutKtpInput>;

    @Field(() => [SimScalarWhereInput], {nullable:true})
    @Type(() => SimScalarWhereInput)
    deleteMany?: Array<SimScalarWhereInput>;
}
