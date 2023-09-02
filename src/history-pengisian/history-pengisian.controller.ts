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
import { HistoryPengisianService } from './history-pengisian.service'
import { HistoryPengisianCreateInput } from './dto/history-pengisian-create.input'
import { ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger'
import { getResponseWithDataType } from 'common/response-with-data'
@ApiBearerAuth()
@Controller('history-pengisian')
export class HistoryPengisianController {
  constructor(
    private readonly historyPengisianService: HistoryPengisianService,
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  @ApiCreatedResponse({
    description: 'Succesful create ajuan Subsidi',
    type: getResponseWithDataType(HistoryPengisianCreateInput),
  })
  async create(
    @Request() req,
    @Body() createHistoryPengisianDto: HistoryPengisianCreateInput,
  ) {
    return {
      statusCode: HttpStatus.CREATED,
      data: await this.historyPengisianService.create({
        ...createHistoryPengisianDto,
        user_id: req.user.id,
      }),
    }
  }
}
