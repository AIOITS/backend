import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AjuanSubsidiWhereInput } from './ajuan-subsidi-where.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiUpdateWithoutDokumen_pendukungInput } from './ajuan-subsidi-update-without-dokumen-pendukung.input';

@InputType()
export class AjuanSubsidiUpdateToOneWithWhereWithoutDokumen_pendukungInput {

    @Field(() => AjuanSubsidiWhereInput, {nullable:true})
    @Type(() => AjuanSubsidiWhereInput)
    where?: AjuanSubsidiWhereInput;

    @Field(() => AjuanSubsidiUpdateWithoutDokumen_pendukungInput, {nullable:false})
    @Type(() => AjuanSubsidiUpdateWithoutDokumen_pendukungInput)
    data!: AjuanSubsidiUpdateWithoutDokumen_pendukungInput;
}
