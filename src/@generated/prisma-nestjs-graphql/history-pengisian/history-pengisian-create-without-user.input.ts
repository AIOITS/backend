import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KategoriPengisian } from '../prisma/kategori-pengisian.enum';
import { Float } from '@nestjs/graphql';
import { DeviceCreateNestedOneWithoutHistoryPengisianInput } from '../device/device-create-nested-one-without-history-pengisian.input';
import { SpbuCreateNestedOneWithoutHistoryPengisianInput } from '../spbu/spbu-create-nested-one-without-history-pengisian.input';
import { BbmCreateNestedOneWithoutHistoryPengisianInput } from '../bbm/bbm-create-nested-one-without-history-pengisian.input';
import { StnkCreateNestedOneWithoutHistory_pengisianInput } from '../stnk/stnk-create-nested-one-without-history-pengisian.input';

@InputType()
export class HistoryPengisianCreateWithoutUserInput {

    @Field(() => KategoriPengisian, {nullable:false})
    kategori_pengisian!: keyof typeof KategoriPengisian;

    @Field(() => String, {nullable:false})
    jenis_kendaraan!: string;

    @Field(() => Float, {nullable:false})
    jumlah!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DeviceCreateNestedOneWithoutHistoryPengisianInput, {nullable:false})
    device!: DeviceCreateNestedOneWithoutHistoryPengisianInput;

    @Field(() => SpbuCreateNestedOneWithoutHistoryPengisianInput, {nullable:false})
    spbu!: SpbuCreateNestedOneWithoutHistoryPengisianInput;

    @Field(() => BbmCreateNestedOneWithoutHistoryPengisianInput, {nullable:true})
    bbm?: BbmCreateNestedOneWithoutHistoryPengisianInput;

    @Field(() => StnkCreateNestedOneWithoutHistory_pengisianInput, {nullable:false})
    stnk!: StnkCreateNestedOneWithoutHistory_pengisianInput;
}
