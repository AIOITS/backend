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
import { ApiBearerAuth } from '@nestjs/swagger'
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
