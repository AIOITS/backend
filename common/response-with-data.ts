import { ApiProperty } from "@nestjs/swagger"

export function getResponseWithDataType(data) {
  class ResponseWithData<T> {
    @ApiProperty({
      example: '201',
    })
    statusCode: number
    @ApiProperty({
      type: data
    })
    data: T
  }
  
  return ResponseWithData<typeof data>
}

export class ResponseWithData<T> {
  @ApiProperty({
    example: '201',
  })
  statusCode: number
  @ApiProperty({
    type: Object
  })
  data: T
}