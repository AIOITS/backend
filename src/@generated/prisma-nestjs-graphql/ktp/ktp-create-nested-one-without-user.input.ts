import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KTPCreateWithoutUserInput } from './ktp-create-without-user.input';
import { Type } from 'class-transformer';
import { KTPCreateOrConnectWithoutUserInput } from './ktp-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { KTPWhereUniqueInput } from './ktp-where-unique.input';

@InputType()
export class KTPCreateNestedOneWithoutUserInput {

    @Field(() => KTPCreateWithoutUserInput, {nullable:true})
    @Type(() => KTPCreateWithoutUserInput)
    create?: KTPCreateWithoutUserInput;

    @Field(() => KTPCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => KTPCreateOrConnectWithoutUserInput)
    connectOrCreate?: KTPCreateOrConnectWithoutUserInput;

    @Field(() => KTPWhereUniqueInput, {nullable:true})
    @Type(() => KTPWhereUniqueInput)
    connect?: Prisma.AtLeast<KTPWhereUniqueInput, 'nik'>;
}
