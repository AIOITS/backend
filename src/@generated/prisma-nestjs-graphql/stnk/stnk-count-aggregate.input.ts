import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StnkCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    nomor_stnk?: true;

    @Field(() => Boolean, {nullable:true})
    nomor_polisi?: true;

    @Field(() => Boolean, {nullable:true})
    nama_pemilik?: true;

    @Field(() => Boolean, {nullable:true})
    nomor_bpkb?: true;

    @Field(() => Boolean, {nullable:true})
    alamat?: true;

    @Field(() => Boolean, {nullable:true})
    bahan_bakar?: true;

    @Field(() => Boolean, {nullable:true})
    berlaku?: true;

    @Field(() => Boolean, {nullable:true})
    merk?: true;

    @Field(() => Boolean, {nullable:true})
    tipe?: true;

    @Field(() => Boolean, {nullable:true})
    jenis?: true;

    @Field(() => Boolean, {nullable:true})
    model?: true;

    @Field(() => Boolean, {nullable:true})
    tahun_pembuatan?: true;

    @Field(() => Boolean, {nullable:true})
    isi_silinder?: true;

    @Field(() => Boolean, {nullable:true})
    nomor_mesin?: true;

    @Field(() => Boolean, {nullable:true})
    nomor_rangka?: true;

    @Field(() => Boolean, {nullable:true})
    warna?: true;

    @Field(() => Boolean, {nullable:true})
    warna_tnkb?: true;

    @Field(() => Boolean, {nullable:true})
    tahun_registrasi?: true;

    @Field(() => Boolean, {nullable:true})
    nomor_registrasi?: true;

    @Field(() => Boolean, {nullable:true})
    kode_lokasi?: true;

    @Field(() => Boolean, {nullable:true})
    nomor_urut_pendaftaran?: true;

    @Field(() => Boolean, {nullable:true})
    nomor_pkb?: true;

    @Field(() => Boolean, {nullable:true})
    nik?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
