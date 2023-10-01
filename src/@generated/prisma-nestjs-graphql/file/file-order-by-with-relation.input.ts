import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AjuanSubsidiOrderByWithRelationInput } from '../ajuan-subsidi/ajuan-subsidi-order-by-with-relation.input';

@InputType()
export class FileOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    ajuanSubsidi_id?: SortOrderInput;

    @Field(() => AjuanSubsidiOrderByWithRelationInput, {nullable:true})
    ajuanSubsidi?: AjuanSubsidiOrderByWithRelationInput;
}
