import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { KtpCountOrderByAggregateInput } from './ktp-count-order-by-aggregate.input';
import { KtpAvgOrderByAggregateInput } from './ktp-avg-order-by-aggregate.input';
import { KtpMaxOrderByAggregateInput } from './ktp-max-order-by-aggregate.input';
import { KtpMinOrderByAggregateInput } from './ktp-min-order-by-aggregate.input';
import { KtpSumOrderByAggregateInput } from './ktp-sum-order-by-aggregate.input';

@InputType()
export class KtpOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    nik?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nama?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tempat_lahir?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tanggal_lahir?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alamat?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rw?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kelurahan_desa?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kecamatan?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kabupaten_kota?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    provinsi?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jenis_kelamin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    golongan_darah?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    agama?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status_perkawinan?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pekerjaan?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kewarganegaraan?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tanggal_terbit?: keyof typeof SortOrder;

    @Field(() => KtpCountOrderByAggregateInput, {nullable:true})
    _count?: KtpCountOrderByAggregateInput;

    @Field(() => KtpAvgOrderByAggregateInput, {nullable:true})
    _avg?: KtpAvgOrderByAggregateInput;

    @Field(() => KtpMaxOrderByAggregateInput, {nullable:true})
    _max?: KtpMaxOrderByAggregateInput;

    @Field(() => KtpMinOrderByAggregateInput, {nullable:true})
    _min?: KtpMinOrderByAggregateInput;

    @Field(() => KtpSumOrderByAggregateInput, {nullable:true})
    _sum?: KtpSumOrderByAggregateInput;
}
