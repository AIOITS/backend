import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UseInterceptors,
  Body,
  UploadedFiles,
  Request,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common'
import { AjuanSubsidiService } from './ajuan-subsidi.service'
import { AuthGuard } from 'src/auth/auth.guard'
import { FilesInterceptor } from '@nestjs/platform-express'
import { AjuanSubsidiCreateInput } from './dto/ajuan-subsidi-create.input'
import { ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger'
import { AjuanSubsidiCreateOutput } from './dto/ajuan-subsidi-create.output'

@ApiBearerAuth()
@Controller('ajuan-subsidi')
export class AjuanSubsidiController {
  constructor(private readonly ajuanSubsidiService: AjuanSubsidiService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  @ApiCreatedResponse({
    description: 'Succesful create ajuan Subsidi',
    type: AjuanSubsidiCreateOutput,
  })
  @UseInterceptors(FilesInterceptor('dokumen_pendukung'))
  async create(
    @Request() req,
    @Body() createAjuanSubsidiDto: AjuanSubsidiCreateInput,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    return {
      statusCode: HttpStatus.CREATED,
      data: await this.ajuanSubsidiService.create({
        ...createAjuanSubsidiDto,
        dokumen_pendukung: files,
        userId: req.user.id,
      }),
    }
  }
}
