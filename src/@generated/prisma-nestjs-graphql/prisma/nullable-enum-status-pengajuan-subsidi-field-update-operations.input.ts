import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatusPengajuanSubsidi } from './status-pengajuan-subsidi.enum';

@InputType()
export class NullableEnumStatusPengajuanSubsidiFieldUpdateOperationsInput {

    @Field(() => StatusPengajuanSubsidi, {nullable:true})
    set?: keyof typeof StatusPengajuanSubsidi;
}
