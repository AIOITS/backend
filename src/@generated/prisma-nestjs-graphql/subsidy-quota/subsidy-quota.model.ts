import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Stnk } from '../stnk/stnk.model';

@ObjectType()
export class SubsidyQuota {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    nomor_stnk!: string;

    @Field(() => Float, {nullable:false,defaultValue:0})
    quota!: number;

    @Field(() => Stnk, {nullable:false})
    stnk?: Stnk;
}
