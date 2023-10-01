import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StnkMinAggregate {

    @Field(() => String, {nullable:true})
    nomor_stnk?: string;

    @Field(() => String, {nullable:true})
    nomor_polisi?: string;

    @Field(() => String, {nullable:true})
    nama_pemilik?: string;

    @Field(() => String, {nullable:true})
    nomor_bpkb?: string;

    @Field(() => String, {nullable:true})
    alamat?: string;

    @Field(() => String, {nullable:true})
    bahan_bakar?: string;

    @Field(() => Date, {nullable:true})
    berlaku?: Date | string;

    @Field(() => String, {nullable:true})
    merk?: string;

    @Field(() => String, {nullable:true})
    tipe?: string;

    @Field(() => String, {nullable:true})
    jenis?: string;

    @Field(() => String, {nullable:true})
    model?: string;

    @Field(() => String, {nullable:true})
    tahun_pembuatan?: string;

    @Field(() => String, {nullable:true})
    isi_silinder?: string;

    @Field(() => String, {nullable:true})
    nomor_mesin?: string;

    @Field(() => String, {nullable:true})
    nomor_rangka?: string;

    @Field(() => String, {nullable:true})
    warna?: string;

    @Field(() => String, {nullable:true})
    warna_tnkb?: string;

    @Field(() => String, {nullable:true})
    tahun_registrasi?: string;

    @Field(() => String, {nullable:true})
    nomor_registrasi?: string;

    @Field(() => String, {nullable:true})
    kode_lokasi?: string;

    @Field(() => String, {nullable:true})
    nomor_urut_pendaftaran?: string;

    @Field(() => String, {nullable:true})
    nomor_pkb?: string;

    @Field(() => String, {nullable:true})
    nik?: string;
}
