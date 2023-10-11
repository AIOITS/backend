import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PkbCreateNestedOneWithoutStnkInput } from '../pkb/pkb-create-nested-one-without-stnk.input';
import { KtpCreateNestedOneWithoutStnkInput } from '../ktp/ktp-create-nested-one-without-stnk.input';
import { HistoryPengisianCreateNestedManyWithoutStnkInput } from '../history-pengisian/history-pengisian-create-nested-many-without-stnk.input';
import { SubsidyQuotaCreateNestedOneWithoutStnkInput } from '../subsidy-quota/subsidy-quota-create-nested-one-without-stnk.input';
import { AjuanSubsidiCreateNestedManyWithoutStnkInput } from '../ajuan-subsidi/ajuan-subsidi-create-nested-many-without-stnk.input';

@InputType()
export class StnkCreateInput {

    @Field(() => String, {nullable:false})
    nomor_stnk!: string;

    @Field(() => String, {nullable:false})
    nomor_polisi!: string;

    @Field(() => String, {nullable:false})
    nama_pemilik!: string;

    @Field(() => String, {nullable:false})
    nomor_bpkb!: string;

    @Field(() => String, {nullable:false})
    alamat!: string;

    @Field(() => String, {nullable:false})
    bahan_bakar!: string;

    @Field(() => Date, {nullable:false})
    berlaku!: Date | string;

    @Field(() => String, {nullable:false})
    merk!: string;

    @Field(() => String, {nullable:false})
    tipe!: string;

    @Field(() => String, {nullable:false})
    jenis!: string;

    @Field(() => String, {nullable:false})
    model!: string;

    @Field(() => String, {nullable:false})
    tahun_pembuatan!: string;

    @Field(() => Int, {nullable:false})
    isi_silinder!: number;

    @Field(() => String, {nullable:false})
    nomor_mesin!: string;

    @Field(() => String, {nullable:false})
    nomor_rangka!: string;

    @Field(() => String, {nullable:false})
    warna!: string;

    @Field(() => String, {nullable:false})
    warna_tnkb!: string;

    @Field(() => String, {nullable:false})
    tahun_registrasi!: string;

    @Field(() => String, {nullable:false})
    nomor_registrasi!: string;

    @Field(() => String, {nullable:false})
    kode_lokasi!: string;

    @Field(() => String, {nullable:false})
    nomor_urut_pendaftaran!: string;

    @Field(() => PkbCreateNestedOneWithoutStnkInput, {nullable:false})
    pkb!: PkbCreateNestedOneWithoutStnkInput;

    @Field(() => KtpCreateNestedOneWithoutStnkInput, {nullable:true})
    ktp?: KtpCreateNestedOneWithoutStnkInput;

    @Field(() => HistoryPengisianCreateNestedManyWithoutStnkInput, {nullable:true})
    history_pengisian?: HistoryPengisianCreateNestedManyWithoutStnkInput;

    @Field(() => SubsidyQuotaCreateNestedOneWithoutStnkInput, {nullable:true})
    subsidy_quota?: SubsidyQuotaCreateNestedOneWithoutStnkInput;

    @Field(() => AjuanSubsidiCreateNestedManyWithoutStnkInput, {nullable:true})
    ajuanSubsidi?: AjuanSubsidiCreateNestedManyWithoutStnkInput;
}
