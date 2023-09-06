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
import { SimCreateInput } from './dto/sim-create.input'
import { ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger'
import { SimService } from './sim.service'

@ApiBearerAuth()
@Controller('sim')
export class SimController {
  constructor(
    private readonly simService: SimService
  ) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  @ApiCreatedResponse({
    description: 'Succesful add Sim',
    type: SimCreateInput,
  })
  async create(
    @Request() req,
    @Body() createSimDto: SimCreateInput,
  ) {
    return {
      statusCode: HttpStatus.CREATED,
      data: await this.simService.create({
        ...createSimDto,
        userId: req.user.id,
      }),
    }
  }
}
