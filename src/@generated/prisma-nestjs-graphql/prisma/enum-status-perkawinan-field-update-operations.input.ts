import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StatusPerkawinan } from './status-perkawinan.enum';

@InputType()
export class EnumStatusPerkawinanFieldUpdateOperationsInput {

    @Field(() => StatusPerkawinan, {nullable:true})
    set?: keyof typeof StatusPerkawinan;
}
