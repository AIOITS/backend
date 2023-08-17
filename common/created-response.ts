import { ApiProperty } from "@nestjs/swagger"

export function getCreatedResponseType(data) {
  class createdResponse<T> {
    @ApiProperty({
      example: '201',
    })
    statusCode: number
    @ApiProperty({
      type: data
    })
    data: T
  }
  return createdResponse<typeof data>
}

export class createdResponse<T> {
  @ApiProperty({
    example: '201',
  })
  statusCode: number
  @ApiProperty({
    type: Object
  })
  data: T
}