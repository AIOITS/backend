import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { KTPCountOrderByAggregateInput } from './ktp-count-order-by-aggregate.input';
import { KTPAvgOrderByAggregateInput } from './ktp-avg-order-by-aggregate.input';
import { KTPMaxOrderByAggregateInput } from './ktp-max-order-by-aggregate.input';
import { KTPMinOrderByAggregateInput } from './ktp-min-order-by-aggregate.input';
import { KTPSumOrderByAggregateInput } from './ktp-sum-order-by-aggregate.input';

@InputType()
export class KTPOrderByWithAggregationInput {

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

    @Field(() => KTPCountOrderByAggregateInput, {nullable:true})
    _count?: KTPCountOrderByAggregateInput;

    @Field(() => KTPAvgOrderByAggregateInput, {nullable:true})
    _avg?: KTPAvgOrderByAggregateInput;

    @Field(() => KTPMaxOrderByAggregateInput, {nullable:true})
    _max?: KTPMaxOrderByAggregateInput;

    @Field(() => KTPMinOrderByAggregateInput, {nullable:true})
    _min?: KTPMinOrderByAggregateInput;

    @Field(() => KTPSumOrderByAggregateInput, {nullable:true})
    _sum?: KTPSumOrderByAggregateInput;
}
