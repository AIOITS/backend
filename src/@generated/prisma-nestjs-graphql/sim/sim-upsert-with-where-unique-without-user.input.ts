import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SIMWhereUniqueInput } from './sim-where-unique.input';
import { Type } from 'class-transformer';
import { SIMUpdateWithoutUserInput } from './sim-update-without-user.input';
import { SIMCreateWithoutUserInput } from './sim-create-without-user.input';

@InputType()
export class SIMUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => SIMWhereUniqueInput, {nullable:false})
    @Type(() => SIMWhereUniqueInput)
    where!: Prisma.AtLeast<SIMWhereUniqueInput, 'nomor_sim'>;

    @Field(() => SIMUpdateWithoutUserInput, {nullable:false})
    @Type(() => SIMUpdateWithoutUserInput)
    update!: SIMUpdateWithoutUserInput;

    @Field(() => SIMCreateWithoutUserInput, {nullable:false})
    @Type(() => SIMCreateWithoutUserInput)
    create!: SIMCreateWithoutUserInput;
}
