import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Pkb } from '../pkb/pkb.model';
import { Ktp } from '../ktp/ktp.model';
import { HistoryPengisian } from '../history-pengisian/history-pengisian.model';
import { SubsidyQuota } from '../subsidy-quota/subsidy-quota.model';
import { AjuanSubsidi } from '../ajuan-subsidi/ajuan-subsidi.model';
import { StnkCount } from './stnk-count.output';

@ObjectType()
export class Stnk {

    @Field(() => ID, {nullable:false})
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
    berlaku!: Date;

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

    @Field(() => String, {nullable:false})
    nomor_pkb!: string;

    @Field(() => String, {nullable:true})
    nik!: string | null;

    @Field(() => Pkb, {nullable:false})
    pkb?: Pkb;

    @Field(() => Ktp, {nullable:true})
    ktp?: Ktp | null;

    @Field(() => [HistoryPengisian], {nullable:true})
    history_pengisian?: Array<HistoryPengisian>;

    @Field(() => SubsidyQuota, {nullable:true})
    subsidy_quota?: SubsidyQuota | null;

    @Field(() => [AjuanSubsidi], {nullable:true})
    ajuanSubsidi?: Array<AjuanSubsidi>;

    @Field(() => StnkCount, {nullable:false})
    _count?: StnkCount;
}
