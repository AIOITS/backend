import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SpbuWhereInput } from './spbu-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySpbuArgs {

    @Field(() => SpbuWhereInput, {nullable:true})
    @Type(() => SpbuWhereInput)
    where?: SpbuWhereInput;
}
