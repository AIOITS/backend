import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AjuanSubsidiCreateWithoutDokumen_pendukungInput } from './ajuan-subsidi-create-without-dokumen-pendukung.input';
import { Type } from 'class-transformer';
import { AjuanSubsidiCreateOrConnectWithoutDokumen_pendukungInput } from './ajuan-subsidi-create-or-connect-without-dokumen-pendukung.input';
import { Prisma } from '@prisma/client';
import { AjuanSubsidiWhereUniqueInput } from './ajuan-subsidi-where-unique.input';

@InputType()
export class AjuanSubsidiCreateNestedOneWithoutDokumen_pendukungInput {

    @Field(() => AjuanSubsidiCreateWithoutDokumen_pendukungInput, {nullable:true})
    @Type(() => AjuanSubsidiCreateWithoutDokumen_pendukungInput)
    create?: AjuanSubsidiCreateWithoutDokumen_pendukungInput;

    @Field(() => AjuanSubsidiCreateOrConnectWithoutDokumen_pendukungInput, {nullable:true})
    @Type(() => AjuanSubsidiCreateOrConnectWithoutDokumen_pendukungInput)
    connectOrCreate?: AjuanSubsidiCreateOrConnectWithoutDokumen_pendukungInput;

    @Field(() => AjuanSubsidiWhereUniqueInput, {nullable:true})
    @Type(() => AjuanSubsidiWhereUniqueInput)
    connect?: Prisma.AtLeast<AjuanSubsidiWhereUniqueInput, 'id'>;
}
