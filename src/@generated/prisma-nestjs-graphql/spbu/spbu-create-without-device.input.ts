import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HistoryPengisianCreateNestedManyWithoutSpbuInput } from '../history-pengisian/history-pengisian-create-nested-many-without-spbu.input';

@InputType()
export class SpbuCreateWithoutDeviceInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    alamat!: string;

    @Field(() => HistoryPengisianCreateNestedManyWithoutSpbuInput, {nullable:true})
    historyPengisian?: HistoryPengisianCreateNestedManyWithoutSpbuInput;
}
