import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KTPCreateWithoutUserInput } from './ktp-create-without-user.input';
import { Type } from 'class-transformer';
import { KTPCreateOrConnectWithoutUserInput } from './ktp-create-or-connect-without-user.input';
import { KTPUpsertWithoutUserInput } from './ktp-upsert-without-user.input';
import { Prisma } from '@prisma/client';
import { KTPWhereUniqueInput } from './ktp-where-unique.input';
import { KTPUpdateToOneWithWhereWithoutUserInput } from './ktp-update-to-one-with-where-without-user.input';

@InputType()
export class KTPUpdateOneRequiredWithoutUserNestedInput {

    @Field(() => KTPCreateWithoutUserInput, {nullable:true})
    @Type(() => KTPCreateWithoutUserInput)
    create?: KTPCreateWithoutUserInput;

    @Field(() => KTPCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => KTPCreateOrConnectWithoutUserInput)
    connectOrCreate?: KTPCreateOrConnectWithoutUserInput;

    @Field(() => KTPUpsertWithoutUserInput, {nullable:true})
    @Type(() => KTPUpsertWithoutUserInput)
    upsert?: KTPUpsertWithoutUserInput;

    @Field(() => KTPWhereUniqueInput, {nullable:true})
    @Type(() => KTPWhereUniqueInput)
    connect?: Prisma.AtLeast<KTPWhereUniqueInput, 'nik'>;

    @Field(() => KTPUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => KTPUpdateToOneWithWhereWithoutUserInput)
    update?: KTPUpdateToOneWithWhereWithoutUserInput;
}
