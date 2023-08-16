import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Agama } from './agama.enum';

@InputType()
export class EnumAgamaFieldUpdateOperationsInput {

    @Field(() => Agama, {nullable:true})
    set?: keyof typeof Agama;
}
