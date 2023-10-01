import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutAjuanSubsidiInput } from './file-create-without-ajuan-subsidi.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutAjuanSubsidiInput } from './file-create-or-connect-without-ajuan-subsidi.input';
import { FileUpsertWithWhereUniqueWithoutAjuanSubsidiInput } from './file-upsert-with-where-unique-without-ajuan-subsidi.input';
import { FileCreateManyAjuanSubsidiInputEnvelope } from './file-create-many-ajuan-subsidi-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutAjuanSubsidiInput } from './file-update-with-where-unique-without-ajuan-subsidi.input';
import { FileUpdateManyWithWhereWithoutAjuanSubsidiInput } from './file-update-many-with-where-without-ajuan-subsidi.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUpdateManyWithoutAjuanSubsidiNestedInput {

    @Field(() => [FileCreateWithoutAjuanSubsidiInput], {nullable:true})
    @Type(() => FileCreateWithoutAjuanSubsidiInput)
    create?: Array<FileCreateWithoutAjuanSubsidiInput>;

    @Field(() => [FileCreateOrConnectWithoutAjuanSubsidiInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutAjuanSubsidiInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutAjuanSubsidiInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutAjuanSubsidiInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutAjuanSubsidiInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutAjuanSubsidiInput>;

    @Field(() => FileCreateManyAjuanSubsidiInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyAjuanSubsidiInputEnvelope)
    createMany?: FileCreateManyAjuanSubsidiInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutAjuanSubsidiInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutAjuanSubsidiInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutAjuanSubsidiInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutAjuanSubsidiInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutAjuanSubsidiInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutAjuanSubsidiInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}
