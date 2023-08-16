import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SIMWhereUniqueInput } from './sim-where-unique.input';
import { Type } from 'class-transformer';
import { SIMCreateWithoutUserInput } from './sim-create-without-user.input';

@InputType()
export class SIMCreateOrConnectWithoutUserInput {

    @Field(() => SIMWhereUniqueInput, {nullable:false})
    @Type(() => SIMWhereUniqueInput)
    where!: Prisma.AtLeast<SIMWhereUniqueInput, 'nomor_sim'>;

    @Field(() => SIMCreateWithoutUserInput, {nullable:false})
    @Type(() => SIMCreateWithoutUserInput)
    create!: SIMCreateWithoutUserInput;
}
