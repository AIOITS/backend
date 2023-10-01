import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BbmCreateManyInput } from './bbm-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBbmArgs {

    @Field(() => [BbmCreateManyInput], {nullable:false})
    @Type(() => BbmCreateManyInput)
    data!: Array<BbmCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
