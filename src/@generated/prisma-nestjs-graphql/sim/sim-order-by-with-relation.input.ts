import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class SIMOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    nomor_sim?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nama?: keyof typeof SortOrder;

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
    kabupaten?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    pekerjaan?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kabupaten_terbit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tanggal_terbit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    penerbit?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    berlaku_sampai?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    userId?: SortOrderInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: UserOrderByWithRelationInput;
}
