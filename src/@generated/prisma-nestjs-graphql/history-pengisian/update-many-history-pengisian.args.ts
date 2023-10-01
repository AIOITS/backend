import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HistoryPengisianUpdateManyMutationInput } from './history-pengisian-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HistoryPengisianWhereInput } from './history-pengisian-where.input';

@ArgsType()
export class UpdateManyHistoryPengisianArgs {

    @Field(() => HistoryPengisianUpdateManyMutationInput, {nullable:false})
    @Type(() => HistoryPengisianUpdateManyMutationInput)
    data!: HistoryPengisianUpdateManyMutationInput;

    @Field(() => HistoryPengisianWhereInput, {nullable:true})
    @Type(() => HistoryPengisianWhereInput)
    where?: HistoryPengisianWhereInput;
}
