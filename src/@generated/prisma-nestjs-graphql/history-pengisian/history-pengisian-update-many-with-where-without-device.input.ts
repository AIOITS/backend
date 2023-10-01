import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HistoryPengisianScalarWhereInput } from './history-pengisian-scalar-where.input';
import { Type } from 'class-transformer';
import { HistoryPengisianUpdateManyMutationInput } from './history-pengisian-update-many-mutation.input';

@InputType()
export class HistoryPengisianUpdateManyWithWhereWithoutDeviceInput {

    @Field(() => HistoryPengisianScalarWhereInput, {nullable:false})
    @Type(() => HistoryPengisianScalarWhereInput)
    where!: HistoryPengisianScalarWhereInput;

    @Field(() => HistoryPengisianUpdateManyMutationInput, {nullable:false})
    @Type(() => HistoryPengisianUpdateManyMutationInput)
    data!: HistoryPengisianUpdateManyMutationInput;
}
