import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpbuCreateManyInput } from './spbu-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySpbuArgs {

    @Field(() => [SpbuCreateManyInput], {nullable:false})
    @Type(() => SpbuCreateManyInput)
    data!: Array<SpbuCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
