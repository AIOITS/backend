import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SpbuWhereInput } from './spbu-where.input';
import { Type } from 'class-transformer';
import { SpbuUpdateWithoutDeviceInput } from './spbu-update-without-device.input';

@InputType()
export class SpbuUpdateToOneWithWhereWithoutDeviceInput {

    @Field(() => SpbuWhereInput, {nullable:true})
    @Type(() => SpbuWhereInput)
    where?: SpbuWhereInput;

    @Field(() => SpbuUpdateWithoutDeviceInput, {nullable:false})
    @Type(() => SpbuUpdateWithoutDeviceInput)
    data!: SpbuUpdateWithoutDeviceInput;
}
