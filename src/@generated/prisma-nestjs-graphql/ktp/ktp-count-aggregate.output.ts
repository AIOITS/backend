import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class KTPCountAggregate {

    @Field(() => Int, {nullable:false})
    nik!: number;

    @Field(() => Int, {nullable:false})
    nama!: number;

    @Field(() => Int, {nullable:false})
    tempat_lahir!: number;

    @Field(() => Int, {nullable:false})
    tanggal_lahir!: number;

    @Field(() => Int, {nullable:false})
    alamat!: number;

    @Field(() => Int, {nullable:false})
    rt!: number;

    @Field(() => Int, {nullable:false})
    rw!: number;

    @Field(() => Int, {nullable:false})
    kelurahan_desa!: number;

    @Field(() => Int, {nullable:false})
    kecamatan!: number;

    @Field(() => Int, {nullable:false})
    kabupaten_kota!: number;

    @Field(() => Int, {nullable:false})
    provinsi!: number;

    @Field(() => Int, {nullable:false})
    golongan_darah!: number;

    @Field(() => Int, {nullable:false})
    agama!: number;

    @Field(() => Int, {nullable:false})
    status_perkawinan!: number;

    @Field(() => Int, {nullable:false})
    pekerjaan!: number;

    @Field(() => Int, {nullable:false})
    kewarganegaraan!: number;

    @Field(() => Int, {nullable:false})
    tanggal_terbit!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
