import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HistoryPengisianCreateManySpbuInput } from './history-pengisian-create-many-spbu.input';
import { Type } from 'class-transformer';

@InputType()
export class HistoryPengisianCreateManySpbuInputEnvelope {

    @Field(() => [HistoryPengisianCreateManySpbuInput], {nullable:false})
    @Type(() => HistoryPengisianCreateManySpbuInput)
    data!: Array<HistoryPengisianCreateManySpbuInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
