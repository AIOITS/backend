import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KTPWhereInput } from './ktp-where.input';
import { Type } from 'class-transformer';
import { KTPUpdateWithoutUserInput } from './ktp-update-without-user.input';

@InputType()
export class KTPUpdateToOneWithWhereWithoutUserInput {

    @Field(() => KTPWhereInput, {nullable:true})
    @Type(() => KTPWhereInput)
    where?: KTPWhereInput;

    @Field(() => KTPUpdateWithoutUserInput, {nullable:false})
    @Type(() => KTPUpdateWithoutUserInput)
    data!: KTPUpdateWithoutUserInput;
}
