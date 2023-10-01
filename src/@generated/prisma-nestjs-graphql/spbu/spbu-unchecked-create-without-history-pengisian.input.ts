import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeviceUncheckedCreateNestedManyWithoutSpbuInput } from '../device/device-unchecked-create-nested-many-without-spbu.input';

@InputType()
export class SpbuUncheckedCreateWithoutHistoryPengisianInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    alamat!: string;

    @Field(() => DeviceUncheckedCreateNestedManyWithoutSpbuInput, {nullable:true})
    device?: DeviceUncheckedCreateNestedManyWithoutSpbuInput;
}
