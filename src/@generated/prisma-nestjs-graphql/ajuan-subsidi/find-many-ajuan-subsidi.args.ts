import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AjuanSubsidiWhereInput } from './ajuan-subsidi-where.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiOrderByWithRelationInput } from './ajuan-subsidi-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AjuanSubsidiScalarFieldEnum } from './ajuan-subsidi-scalar-field.enum';

@ArgsType()
export class FindManyAjuanSubsidiArgs {

    @Field(() => AjuanSubsidiWhereInput, {nullable:true})
    @Type(() => AjuanSubsidiWhereInput)
    where?: AjuanSubsidiWhereInput;

    @Field(() => [AjuanSubsidiOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AjuanSubsidiOrderByWithRelationInput>;

    @Field(() => AjuanSubsidiWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AjuanSubsidiScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AjuanSubsidiScalarFieldEnum>;
}
