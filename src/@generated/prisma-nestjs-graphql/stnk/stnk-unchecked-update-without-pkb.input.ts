import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { HistoryPengisianUncheckedUpdateManyWithoutStnkNestedInput } from '../history-pengisian/history-pengisian-unchecked-update-many-without-stnk-nested.input';
import { SubsidyQuotaUncheckedUpdateOneWithoutStnkNestedInput } from '../subsidy-quota/subsidy-quota-unchecked-update-one-without-stnk-nested.input';
import { AjuanSubsidiUncheckedUpdateManyWithoutStnkNestedInput } from '../ajuan-subsidi/ajuan-subsidi-unchecked-update-many-without-stnk-nested.input';

@InputType()
export class StnkUncheckedUpdateWithoutPkbInput {

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

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    nik?: NullableStringFieldUpdateOperationsInput;

    @Field(() => HistoryPengisianUncheckedUpdateManyWithoutStnkNestedInput, {nullable:true})
    history_pengisian?: HistoryPengisianUncheckedUpdateManyWithoutStnkNestedInput;

    @Field(() => SubsidyQuotaUncheckedUpdateOneWithoutStnkNestedInput, {nullable:true})
    subsidy_quota?: SubsidyQuotaUncheckedUpdateOneWithoutStnkNestedInput;

    @Field(() => AjuanSubsidiUncheckedUpdateManyWithoutStnkNestedInput, {nullable:true})
    ajuanSubsidi?: AjuanSubsidiUncheckedUpdateManyWithoutStnkNestedInput;
}
