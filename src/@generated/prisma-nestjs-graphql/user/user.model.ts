import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SIM } from '../sim/sim.model';
import { KTP } from '../ktp/ktp.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    nik!: string;

    @Field(() => [String], {nullable:true})
    name!: Array<string>;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Int, {nullable:false,defaultValue:2})
    role!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [SIM], {nullable:true})
    nomor_sim?: Array<SIM>;

    @Field(() => KTP, {nullable:false})
    ktp?: KTP;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
