import { ApiProperty } from "@nestjs/swagger"

export function getUpdatedResponseType(data) {
  class updatedResponse<T> {
    @ApiProperty({
      example: '201',
    })
    statusCode: number
    @ApiProperty({
      type: data
    })
    data: T
  }
  return updatedResponse<typeof data>
}

export class updatedResponse<T> {
  @ApiProperty({
    example: '201',
  })
  statusCode: number
  @ApiProperty({
    type: Object
  })
  data: T
}