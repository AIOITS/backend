import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class DeviceScalarWhereWithAggregatesInput {

    @Field(() => [DeviceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DeviceScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DeviceScalarWhereWithAggregatesInput>;

    @Field(() => [DeviceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DeviceScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    device_id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    spbu_id?: IntWithAggregatesFilter;
}
