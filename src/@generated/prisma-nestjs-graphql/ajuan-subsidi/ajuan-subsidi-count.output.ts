import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AjuanSubsidiCount {

    @Field(() => Int, {nullable:false})
    dokumen_pendukung?: number;
}
