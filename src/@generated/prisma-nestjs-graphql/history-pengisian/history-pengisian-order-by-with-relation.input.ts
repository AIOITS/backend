import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeviceOrderByWithRelationInput } from '../device/device-order-by-with-relation.input';
import { SpbuOrderByWithRelationInput } from '../spbu/spbu-order-by-with-relation.input';
import { BbmOrderByWithRelationInput } from '../bbm/bbm-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { StnkOrderByWithRelationInput } from '../stnk/stnk-order-by-with-relation.input';

@InputType()
export class HistoryPengisianOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kategori_pengisian?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    device_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jenis_kendaraan?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    spbu_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    jumlah?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bbm_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    nomor_stnk?: keyof typeof SortOrder;

    @Field(() => DeviceOrderByWithRelationInput, {nullable:true})
    device?: DeviceOrderByWithRelationInput;

    @Field(() => SpbuOrderByWithRelationInput, {nullable:true})
    spbu?: SpbuOrderByWithRelationInput;

    @Field(() => BbmOrderByWithRelationInput, {nullable:true})
    bbm?: BbmOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => StnkOrderByWithRelationInput, {nullable:true})
    stnk?: StnkOrderByWithRelationInput;
}
