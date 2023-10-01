import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HistoryPengisianCreateManyStnkInput } from './history-pengisian-create-many-stnk.input';
import { Type } from 'class-transformer';

@InputType()
export class HistoryPengisianCreateManyStnkInputEnvelope {

    @Field(() => [HistoryPengisianCreateManyStnkInput], {nullable:false})
    @Type(() => HistoryPengisianCreateManyStnkInput)
    data!: Array<HistoryPengisianCreateManyStnkInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
