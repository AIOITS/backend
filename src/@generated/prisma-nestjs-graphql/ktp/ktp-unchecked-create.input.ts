import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';
import { GolonganDarah } from '../prisma/golongan-darah.enum';
import { Agama } from '../prisma/agama.enum';
import { StatusPerkawinan } from '../prisma/status-perkawinan.enum';
import { UserUncheckedCreateNestedOneWithoutKtpInput } from '../user/user-unchecked-create-nested-one-without-ktp.input';

@InputType()
export class KTPUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsNumberString()
    @Validator.MinLength(16)
    @Validator.MaxLength(16)
    nik!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    nama!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    tempat_lahir!: string;

    @Field(() => Date, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsISO8601({strict: true})
    tanggal_lahir!: Date | string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    alamat!: string;

    @Field(() => Int, {nullable:false})
    @Validator.IsNotEmpty()
    rt!: number;

    @Field(() => Int, {nullable:false})
    @Validator.IsNotEmpty()
    rw!: number;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    kelurahan_desa!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    kecamatan!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    kabupaten_kota!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    provinsi!: string;

    @Field(() => GolonganDarah, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsEnum(GolonganDarah)
    golongan_darah!: keyof typeof GolonganDarah;

    @Field(() => Agama, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsEnum(Agama)
    agama!: keyof typeof Agama;

    @Field(() => StatusPerkawinan, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsEnum(StatusPerkawinan)
    status_perkawinan!: keyof typeof StatusPerkawinan;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    pekerjaan!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsString()
    kewarganegaraan!: string;

    @Field(() => Date, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.IsISO8601({strict: true})
    tanggal_terbit!: Date | string;

    @Field(() => UserUncheckedCreateNestedOneWithoutKtpInput, {nullable:true})
    User?: UserUncheckedCreateNestedOneWithoutKtpInput;
}
