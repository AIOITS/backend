import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutAjuanSubsidiInput } from './file-create-without-ajuan-subsidi.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutAjuanSubsidiInput } from './file-create-or-connect-without-ajuan-subsidi.input';
import { FileCreateManyAjuanSubsidiInputEnvelope } from './file-create-many-ajuan-subsidi-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileUncheckedCreateNestedManyWithoutAjuanSubsidiInput {

    @Field(() => [FileCreateWithoutAjuanSubsidiInput], {nullable:true})
    @Type(() => FileCreateWithoutAjuanSubsidiInput)
    create?: Array<FileCreateWithoutAjuanSubsidiInput>;

    @Field(() => [FileCreateOrConnectWithoutAjuanSubsidiInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutAjuanSubsidiInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutAjuanSubsidiInput>;

    @Field(() => FileCreateManyAjuanSubsidiInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyAjuanSubsidiInputEnvelope)
    createMany?: FileCreateManyAjuanSubsidiInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;
}
