import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PKBCountAggregate } from './pkb-count-aggregate.output';
import { PKBAvgAggregate } from './pkb-avg-aggregate.output';
import { PKBSumAggregate } from './pkb-sum-aggregate.output';
import { PKBMinAggregate } from './pkb-min-aggregate.output';
import { PKBMaxAggregate } from './pkb-max-aggregate.output';

@ObjectType()
export class PKBGroupBy {

    @Field(() => String, {nullable:false})
    nomor_PKB!: string;

    @Field(() => Boolean, {nullable:false})
    status_pajak!: boolean;

    @Field(() => Int, {nullable:false})
    bbknb_pokok!: number;

    @Field(() => Int, {nullable:false})
    bbknb_sanksi!: number;

    @Field(() => Int, {nullable:false})
    PKB_pokok!: number;

    @Field(() => Int, {nullable:false})
    PKB_sanksi!: number;

    @Field(() => Int, {nullable:false})
    swdkllj_pokok!: number;

    @Field(() => Int, {nullable:false})
    swdkllj_sanksi!: number;

    @Field(() => Int, {nullable:false})
    administrasi_stnk_pokok!: number;

    @Field(() => Int, {nullable:false})
    administrasi_stnk_sanksi!: number;

    @Field(() => Int, {nullable:false})
    administrasi_tnkb_pokok!: number;

    @Field(() => Int, {nullable:false})
    administrasi_tnkb_sanksi!: number;

    @Field(() => PKBCountAggregate, {nullable:true})
    _count?: PKBCountAggregate;

    @Field(() => PKBAvgAggregate, {nullable:true})
    _avg?: PKBAvgAggregate;

    @Field(() => PKBSumAggregate, {nullable:true})
    _sum?: PKBSumAggregate;

    @Field(() => PKBMinAggregate, {nullable:true})
    _min?: PKBMinAggregate;

    @Field(() => PKBMaxAggregate, {nullable:true})
    _max?: PKBMaxAggregate;
}
