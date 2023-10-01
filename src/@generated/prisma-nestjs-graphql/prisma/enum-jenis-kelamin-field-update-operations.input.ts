import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { JenisKelamin } from './jenis-kelamin.enum';

@InputType()
export class EnumJenisKelaminFieldUpdateOperationsInput {

    @Field(() => JenisKelamin, {nullable:true})
    set?: keyof typeof JenisKelamin;
}
