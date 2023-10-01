import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpbuUpdateWithoutHistoryPengisianInput } from './spbu-update-without-history-pengisian.input';
import { Type } from 'class-transformer';
import { SpbuCreateWithoutHistoryPengisianInput } from './spbu-create-without-history-pengisian.input';
import { SpbuWhereInput } from './spbu-where.input';

@InputType()
export class SpbuUpsertWithoutHistoryPengisianInput {

    @Field(() => SpbuUpdateWithoutHistoryPengisianInput, {nullable:false})
    @Type(() => SpbuUpdateWithoutHistoryPengisianInput)
    update!: SpbuUpdateWithoutHistoryPengisianInput;

    @Field(() => SpbuCreateWithoutHistoryPengisianInput, {nullable:false})
    @Type(() => SpbuCreateWithoutHistoryPengisianInput)
    create!: SpbuCreateWithoutHistoryPengisianInput;

    @Field(() => SpbuWhereInput, {nullable:true})
    @Type(() => SpbuWhereInput)
    where?: SpbuWhereInput;
}
