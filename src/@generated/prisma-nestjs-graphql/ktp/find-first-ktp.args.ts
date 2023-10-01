import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { KtpWhereInput } from './ktp-where.input';
import { Type } from 'class-transformer';
import { KtpOrderByWithRelationInput } from './ktp-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { KtpWhereUniqueInput } from './ktp-where-unique.input';
import { Int } from '@nestjs/graphql';
import { KtpScalarFieldEnum } from './ktp-scalar-field.enum';

@ArgsType()
export class FindFirstKtpArgs {

    @Field(() => KtpWhereInput, {nullable:true})
    @Type(() => KtpWhereInput)
    where?: KtpWhereInput;

    @Field(() => [KtpOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<KtpOrderByWithRelationInput>;

    @Field(() => KtpWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<KtpWhereUniqueInput, 'nik'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [KtpScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof KtpScalarFieldEnum>;
}
