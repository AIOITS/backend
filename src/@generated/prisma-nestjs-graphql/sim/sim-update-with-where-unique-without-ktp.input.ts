import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SimWhereUniqueInput } from './sim-where-unique.input';
import { Type } from 'class-transformer';
import { SimUpdateWithoutKtpInput } from './sim-update-without-ktp.input';

@InputType()
export class SimUpdateWithWhereUniqueWithoutKtpInput {

    @Field(() => SimWhereUniqueInput, {nullable:false})
    @Type(() => SimWhereUniqueInput)
    where!: Prisma.AtLeast<SimWhereUniqueInput, 'uid' | 'nomor_sim'>;

    @Field(() => SimUpdateWithoutKtpInput, {nullable:false})
    @Type(() => SimUpdateWithoutKtpInput)
    data!: SimUpdateWithoutKtpInput;
}
