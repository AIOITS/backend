import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { KategoriPengisian } from './kategori-pengisian.enum';

@InputType()
export class EnumKategoriPengisianFieldUpdateOperationsInput {

    @Field(() => KategoriPengisian, {nullable:true})
    set?: keyof typeof KategoriPengisian;
}
