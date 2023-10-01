import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkCreateWithoutPkbInput } from './stnk-create-without-pkb.input';
import { Type } from 'class-transformer';
import { StnkCreateOrConnectWithoutPkbInput } from './stnk-create-or-connect-without-pkb.input';
import { StnkUpsertWithoutPkbInput } from './stnk-upsert-without-pkb.input';
import { StnkWhereInput } from './stnk-where.input';
import { Prisma } from '@prisma/client';
import { StnkWhereUniqueInput } from './stnk-where-unique.input';
import { StnkUpdateToOneWithWhereWithoutPkbInput } from './stnk-update-to-one-with-where-without-pkb.input';

@InputType()
export class StnkUncheckedUpdateOneWithoutPkbNestedInput {

    @Field(() => StnkCreateWithoutPkbInput, {nullable:true})
    @Type(() => StnkCreateWithoutPkbInput)
    create?: StnkCreateWithoutPkbInput;

    @Field(() => StnkCreateOrConnectWithoutPkbInput, {nullable:true})
    @Type(() => StnkCreateOrConnectWithoutPkbInput)
    connectOrCreate?: StnkCreateOrConnectWithoutPkbInput;

    @Field(() => StnkUpsertWithoutPkbInput, {nullable:true})
    @Type(() => StnkUpsertWithoutPkbInput)
    upsert?: StnkUpsertWithoutPkbInput;

    @Field(() => StnkWhereInput, {nullable:true})
    @Type(() => StnkWhereInput)
    disconnect?: StnkWhereInput;

    @Field(() => StnkWhereInput, {nullable:true})
    @Type(() => StnkWhereInput)
    delete?: StnkWhereInput;

    @Field(() => StnkWhereUniqueInput, {nullable:true})
    @Type(() => StnkWhereUniqueInput)
    connect?: Prisma.AtLeast<StnkWhereUniqueInput, 'nomor_stnk' | 'nomor_polisi' | 'nomor_pkb'>;

    @Field(() => StnkUpdateToOneWithWhereWithoutPkbInput, {nullable:true})
    @Type(() => StnkUpdateToOneWithWhereWithoutPkbInput)
    update?: StnkUpdateToOneWithWhereWithoutPkbInput;
}
