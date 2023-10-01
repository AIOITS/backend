import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BbmUpdateWithoutHistoryPengisianInput } from './bbm-update-without-history-pengisian.input';
import { Type } from 'class-transformer';
import { BbmCreateWithoutHistoryPengisianInput } from './bbm-create-without-history-pengisian.input';
import { BbmWhereInput } from './bbm-where.input';

@InputType()
export class BbmUpsertWithoutHistoryPengisianInput {

    @Field(() => BbmUpdateWithoutHistoryPengisianInput, {nullable:false})
    @Type(() => BbmUpdateWithoutHistoryPengisianInput)
    update!: BbmUpdateWithoutHistoryPengisianInput;

    @Field(() => BbmCreateWithoutHistoryPengisianInput, {nullable:false})
    @Type(() => BbmCreateWithoutHistoryPengisianInput)
    create!: BbmCreateWithoutHistoryPengisianInput;

    @Field(() => BbmWhereInput, {nullable:true})
    @Type(() => BbmWhereInput)
    where?: BbmWhereInput;
}
