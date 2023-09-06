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
import { AuthGuard } from 'src/auth/auth.guard'
import { ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger'
import { StnkService } from './stnk.service'
import StnkCreateInput from './dto/stnk-create.input'

@ApiBearerAuth()
@Controller('stnk')
export class StnkController {
  constructor(
    private readonly stnkService: StnkService
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  @ApiCreatedResponse({
    description: 'Succesful add Stnk',
    type: StnkCreateInput,
  })
  async create(
    @Request() req,
    @Body() createStnkDto: StnkCreateInput,
  ) {
    return {
      statusCode: HttpStatus.CREATED,
      data: await this.stnkService.create({
        ...createStnkDto,
        userId: req.user.id,
      }),
    }
  }
}
