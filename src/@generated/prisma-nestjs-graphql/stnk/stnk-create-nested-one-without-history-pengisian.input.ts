import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkCreateWithoutHistory_pengisianInput } from './stnk-create-without-history-pengisian.input';
import { Type } from 'class-transformer';
import { StnkCreateOrConnectWithoutHistory_pengisianInput } from './stnk-create-or-connect-without-history-pengisian.input';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';

@InputType()
export class StnkCreateNestedOneWithoutHistory_pengisianInput {

    @Field(() => StnkCreateWithoutHistory_pengisianInput, {nullable:true})
    @Type(() => StnkCreateWithoutHistory_pengisianInput)
    create?: StnkCreateWithoutHistory_pengisianInput;

    @Field(() => StnkCreateOrConnectWithoutHistory_pengisianInput, {nullable:true})
    @Type(() => StnkCreateOrConnectWithoutHistory_pengisianInput)
    connectOrCreate?: StnkCreateOrConnectWithoutHistory_pengisianInput;

    @Field(() => StnkWhereUniqueInput, {nullable:true})
    @Type(() => StnkWhereUniqueInput)
    connect?: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;
}
