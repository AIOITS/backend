import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { JenisKelamin } from '../prisma/jenis-kelamin.enum';
import { GolonganDarah } from '../prisma/golongan-darah.enum';
import { Agama } from '../prisma/agama.enum';
import { StatusPerkawinan } from '../prisma/status-perkawinan.enum';
import { SimCreateNestedManyWithoutKtpInput } from '../sim/sim-create-nested-many-without-ktp.input';
import { UserCreateNestedOneWithoutKtpInput } from '../user/user-create-nested-one-without-ktp.input';

@InputType()
export class KtpCreateWithoutStnkInput {

    @Field(() => String, {nullable:false})
    nik!: string;

    @Field(() => String, {nullable:false})
    nama!: string;

    @Field(() => String, {nullable:false})
    tempat_lahir!: string;

    @Field(() => Date, {nullable:false})
    tanggal_lahir!: Date | string;

    @Field(() => String, {nullable:false})
    alamat!: string;

    @Field(() => Int, {nullable:false})
    rt!: number;

    @Field(() => Int, {nullable:false})
    rw!: number;

    @Field(() => String, {nullable:false})
    kelurahan_desa!: string;

    @Field(() => String, {nullable:false})
    kecamatan!: string;

    @Field(() => String, {nullable:false})
    kabupaten_kota!: string;

    @Field(() => String, {nullable:false})
    provinsi!: string;

    @Field(() => JenisKelamin, {nullable:false})
    jenis_kelamin!: keyof typeof JenisKelamin;

    @Field(() => GolonganDarah, {nullable:false})
    golongan_darah!: keyof typeof GolonganDarah;

    @Field(() => Agama, {nullable:false})
    agama!: keyof typeof Agama;

    @Field(() => StatusPerkawinan, {nullable:false})
    status_perkawinan!: keyof typeof StatusPerkawinan;

    @Field(() => String, {nullable:false})
    pekerjaan!: string;

    @Field(() => String, {nullable:false})
    kewarganegaraan!: string;

    @Field(() => Date, {nullable:false})
    tanggal_terbit!: Date | string;

    @Field(() => SimCreateNestedManyWithoutKtpInput, {nullable:true})
    sim?: SimCreateNestedManyWithoutKtpInput;

    @Field(() => UserCreateNestedOneWithoutKtpInput, {nullable:true})
    user?: UserCreateNestedOneWithoutKtpInput;
}
