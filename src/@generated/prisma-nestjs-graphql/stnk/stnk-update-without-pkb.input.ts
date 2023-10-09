import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { KtpUpdateOneWithoutStnkNestedInput } from '../ktp/ktp-update-one-without-stnk-nested.input';
import { HistoryPengisianUpdateManyWithoutStnkNestedInput } from '../history-pengisian/history-pengisian-update-many-without-stnk-nested.input';
import { SubsidyQuotaUpdateOneWithoutStnkNestedInput } from '../subsidy-quota/subsidy-quota-update-one-without-stnk-nested.input';

@InputType()
export class StnkUpdateWithoutPkbInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nomor_stnk?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nomor_polisi?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nama_pemilik?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nomor_bpkb?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    alamat?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bahan_bakar?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    berlaku?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    merk?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tipe?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    jenis?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    model?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tahun_pembuatan?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    isi_silinder?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nomor_mesin?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nomor_rangka?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    warna?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    warna_tnkb?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    tahun_registrasi?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nomor_registrasi?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    kode_lokasi?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nomor_urut_pendaftaran?: StringFieldUpdateOperationsInput;

    @Field(() => KtpUpdateOneWithoutStnkNestedInput, {nullable:true})
    ktp?: KtpUpdateOneWithoutStnkNestedInput;

    @Field(() => HistoryPengisianUpdateManyWithoutStnkNestedInput, {nullable:true})
    history_pengisian?: HistoryPengisianUpdateManyWithoutStnkNestedInput;

    @Field(() => SubsidyQuotaUpdateOneWithoutStnkNestedInput, {nullable:true})
    subsidy_quota?: SubsidyQuotaUpdateOneWithoutStnkNestedInput;
}
