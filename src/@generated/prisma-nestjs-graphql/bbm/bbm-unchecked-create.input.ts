import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { BbmCategory } from '../prisma/bbm-category.enum';
import { HistoryPengisianUncheckedCreateNestedManyWithoutBbmInput } from '../history-pengisian/history-pengisian-unchecked-create-nested-many-without-bbm.input';

@InputType()
export class BbmUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    type!: string;

    @Field(() => Float, {nullable:false})
    price_per_liter!: number;

    @Field(() => Boolean, {nullable:false})
    is_subsidi!: boolean;

    @Field(() => BbmCategory, {nullable:false})
    category!: keyof typeof BbmCategory;

    @Field(() => HistoryPengisianUncheckedCreateNestedManyWithoutBbmInput, {nullable:true})
    HistoryPengisian?: HistoryPengisianUncheckedCreateNestedManyWithoutBbmInput;
}
