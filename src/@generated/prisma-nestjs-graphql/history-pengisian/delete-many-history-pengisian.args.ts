import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HistoryPengisianWhereInput } from './history-pengisian-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHistoryPengisianArgs {

    @Field(() => HistoryPengisianWhereInput, {nullable:true})
    @Type(() => HistoryPengisianWhereInput)
    where?: HistoryPengisianWhereInput;
}
