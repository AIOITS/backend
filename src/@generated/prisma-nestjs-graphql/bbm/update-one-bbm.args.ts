import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BbmUpdateInput } from './bbm-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BbmWhereUniqueInput } from './bbm-where-unique.input';

@ArgsType()
export class UpdateOneBbmArgs {

    @Field(() => BbmUpdateInput, {nullable:false})
    @Type(() => BbmUpdateInput)
    data!: BbmUpdateInput;

    @Field(() => BbmWhereUniqueInput, {nullable:false})
    @Type(() => BbmWhereUniqueInput)
    where!: Prisma.AtLeast<BbmWhereUniqueInput, 'id'>;
}
