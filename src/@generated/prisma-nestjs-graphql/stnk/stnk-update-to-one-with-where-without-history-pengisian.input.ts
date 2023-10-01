import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StnkWhereInput } from './stnk-where.input';
import { Type } from 'class-transformer';
import { StnkUpdateWithoutHistory_pengisianInput } from './stnk-update-without-history-pengisian.input';

@InputType()
export class StnkUpdateToOneWithWhereWithoutHistory_pengisianInput {

    @Field(() => StnkWhereInput, {nullable:true})
    @Type(() => StnkWhereInput)
    where?: StnkWhereInput;

    @Field(() => StnkUpdateWithoutHistory_pengisianInput, {nullable:false})
    @Type(() => StnkUpdateWithoutHistory_pengisianInput)
    data!: StnkUpdateWithoutHistory_pengisianInput;
}
