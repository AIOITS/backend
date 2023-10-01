import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SimWhereUniqueInput } from './sim-where-unique.input';
import { Type } from 'class-transformer';
import { SimCreateWithoutKtpInput } from './sim-create-without-ktp.input';

@InputType()
export class SimCreateOrConnectWithoutKtpInput {

    @Field(() => SimWhereUniqueInput, {nullable:false})
    @Type(() => SimWhereUniqueInput)
    where!: Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>;

    @Field(() => SimCreateWithoutKtpInput, {nullable:false})
    @Type(() => SimCreateWithoutKtpInput)
    create!: SimCreateWithoutKtpInput;
}
