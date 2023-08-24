import { Field } from '@nestjs/graphql'
import { ArgsType } from '@nestjs/graphql'
import { history_pengisianWhereInput } from '../history-pengisian/history-pengisian-where.input'
import { Type } from 'class-transformer'
import { history_pengisianOrderByWithRelationInput } from '../history-pengisian/history-pengisian-order-by-with-relation.input'
import { history_pengisianWhereUniqueInput } from '../history-pengisian/history-pengisian-where-unique.input'
import { Int } from '@nestjs/graphql'
import { History_pengisianScalarFieldEnum } from './history-pengisian-scalar-field.enum'

@ArgsType()
export class FindFirsthistoryPengisianOrThrowArgs {
  @Field(() => history_pengisianWhereInput, { nullable: true })
  @Type(() => history_pengisianWhereInput)
  where?: history_pengisianWhereInput

  @Field(() => [history_pengisianOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<history_pengisianOrderByWithRelationInput>

  @Field(() => history_pengisianWhereUniqueInput, { nullable: true })
  cursor?: history_pengisianWhereUniqueInput

  @Field(() => Int, { nullable: true })
  take?: number

  @Field(() => Int, { nullable: true })
  skip?: number

  @Field(() => [History_pengisianScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof History_pengisianScalarFieldEnum>
}
