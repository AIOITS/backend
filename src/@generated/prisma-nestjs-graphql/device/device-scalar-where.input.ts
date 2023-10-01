import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class DeviceScalarWhereInput {

    @Field(() => [DeviceScalarWhereInput], {nullable:true})
    AND?: Array<DeviceScalarWhereInput>;

    @Field(() => [DeviceScalarWhereInput], {nullable:true})
    OR?: Array<DeviceScalarWhereInput>;

    @Field(() => [DeviceScalarWhereInput], {nullable:true})
    NOT?: Array<DeviceScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    device_id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    spbu_id?: IntFilter;
}
