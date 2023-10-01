import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BbmCreateInput } from './bbm-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBbmArgs {

    @Field(() => BbmCreateInput, {nullable:false})
    @Type(() => BbmCreateInput)
    data!: BbmCreateInput;
}
