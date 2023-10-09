import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { HistoryPengisianListRelationFilter } from '../history-pengisian/history-pengisian-list-relation-filter.input';
import { AjuanSubsidiListRelationFilter } from '../ajuan-subsidi/ajuan-subsidi-list-relation-filter.input';
import { KtpRelationFilter } from '../ktp/ktp-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    nik?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    saldo?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    role?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => HistoryPengisianListRelationFilter, {nullable:true})
    history_pengisian?: HistoryPengisianListRelationFilter;

    @Field(() => AjuanSubsidiListRelationFilter, {nullable:true})
    ajuan_subsidi?: AjuanSubsidiListRelationFilter;

    @Field(() => KtpRelationFilter, {nullable:true})
    ktp?: KtpRelationFilter;
}
