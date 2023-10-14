import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HistoryPengisian } from '../history-pengisian/history-pengisian.model';
import { AjuanSubsidi } from '../ajuan-subsidi/ajuan-subsidi.model';
import { Ktp } from '../ktp/ktp.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    nik!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Int, {nullable:false,defaultValue:0})
    saldo!: number;

    @Field(() => Int, {nullable:false,defaultValue:2})
    role!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [HistoryPengisian], {nullable:true})
    history_pengisian?: Array<HistoryPengisian>;

    @Field(() => [AjuanSubsidi], {nullable:true})
    ajuan_subsidi?: Array<AjuanSubsidi>;

    @Field(() => Ktp, {nullable:false})
    ktp?: Ktp;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
