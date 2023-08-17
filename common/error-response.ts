import { ApiProperty } from "@nestjs/swagger"

export class errorResponse {
  @ApiProperty({
    example: '400',
  })
  statusCode: number
  @ApiProperty({
    oneOf: [
      { type: 'string' },
      { type: 'array', items: { type: 'string' } },
    ],
  })
  message: string | Array<String>
}