import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AjuanSubsidiCountAggregate } from './ajuan-subsidi-count-aggregate.output';
import { AjuanSubsidiAvgAggregate } from './ajuan-subsidi-avg-aggregate.output';
import { AjuanSubsidiSumAggregate } from './ajuan-subsidi-sum-aggregate.output';
import { AjuanSubsidiMinAggregate } from './ajuan-subsidi-min-aggregate.output';
import { AjuanSubsidiMaxAggregate } from './ajuan-subsidi-max-aggregate.output';

@ObjectType()
export class AggregateAjuanSubsidi {

    @Field(() => AjuanSubsidiCountAggregate, {nullable:true})
    _count?: AjuanSubsidiCountAggregate;

    @Field(() => AjuanSubsidiAvgAggregate, {nullable:true})
    _avg?: AjuanSubsidiAvgAggregate;

    @Field(() => AjuanSubsidiSumAggregate, {nullable:true})
    _sum?: AjuanSubsidiSumAggregate;

    @Field(() => AjuanSubsidiMinAggregate, {nullable:true})
    _min?: AjuanSubsidiMinAggregate;

    @Field(() => AjuanSubsidiMaxAggregate, {nullable:true})
    _max?: AjuanSubsidiMaxAggregate;
}
