import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserWhereInput } from './user-where.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { SIMListRelationFilter } from '../sim/sim-list-relation-filter.input';
import { KTPRelationFilter } from '../ktp/ktp-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    @Validator.IsNotEmpty()
    @Validator.MinLength(16)
    @Validator.MaxLength(16)
    nik?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    @Validator.IsOptional()
    email?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsPhoneNumber('ID', {message: 'phone must be a valid Indoesia phone number'})
    @Validator.IsOptional()
    phone?: string;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => StringNullableListFilter, {nullable:true})
    name?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    role?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => SIMListRelationFilter, {nullable:true})
    nomor_sim?: SIMListRelationFilter;

    @Field(() => KTPRelationFilter, {nullable:true})
    ktp?: KTPRelationFilter;
}
