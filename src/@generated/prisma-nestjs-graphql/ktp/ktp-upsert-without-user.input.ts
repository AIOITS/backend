import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KTPUpdateWithoutUserInput } from './ktp-update-without-user.input';
import { Type } from 'class-transformer';
import { KTPCreateWithoutUserInput } from './ktp-create-without-user.input';
import { KTPWhereInput } from './ktp-where.input';

@InputType()
export class KTPUpsertWithoutUserInput {

    @Field(() => KTPUpdateWithoutUserInput, {nullable:false})
    @Type(() => KTPUpdateWithoutUserInput)
    update!: KTPUpdateWithoutUserInput;

    @Field(() => KTPCreateWithoutUserInput, {nullable:false})
    @Type(() => KTPCreateWithoutUserInput)
    create!: KTPCreateWithoutUserInput;

    @Field(() => KTPWhereInput, {nullable:true})
    @Type(() => KTPWhereInput)
    where?: KTPWhereInput;
}
