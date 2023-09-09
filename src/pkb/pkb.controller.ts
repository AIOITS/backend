import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Body,
  Request,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common'
import { ApiCreatedResponse } from '@nestjs/swagger'
import { PkbService } from './pkb.service'
import { PkbCreateInput } from './dto/pkb-create.input'

@Controller('pkb')
export class PkbController {
  constructor(private readonly pkbService: PkbService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UsePipes(new ValidationPipe())
  @ApiCreatedResponse({
    description: 'Succesful add Pkb',
    type: PkbCreateInput,
  })
  async create(@Request() req, @Body() createPkbDto: PkbCreateInput) {
    return {
      statusCode: HttpStatus.CREATED,
      data: await this.pkbService.create({
        ...createPkbDto,
      }),
    }
  }
}
