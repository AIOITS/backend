import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common'
import { KtpService } from './ktp.service'
import { KtpCreateInput } from 'src/ktp/dto/ktp-create.input'
import { KtpUpdateInput } from 'src/ktp/dto/ktp-update.input'
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiAcceptedResponse,
} from '@nestjs/swagger'
import { KtpCreateOutput } from './dto/ktp-create.output'
import { errorResponse } from 'common/error-response'
import {
  ResponseWithData,
  getResponseWithDataType,
} from 'common/response-with-data'
@Controller('ktp')
export class KtpController {
  constructor(private readonly ktpService: KtpService) {}

  @Post()
  @ApiBadRequestResponse({
    description: 'Bad Request',
    type: errorResponse,
  })
  @ApiCreatedResponse({
    description: 'Succesful register Ktp',
    type: KtpCreateOutput,
  })
  async create(
    @Body() createKtpDto: KtpCreateInput,
  ): Promise<ResponseWithData<KtpCreateOutput>> {
    return {
      statusCode: HttpStatus.CREATED,
      data: await this.ktpService.create(createKtpDto),
    }
  }

  @Patch(':nik')
  @ApiNotFoundResponse({
    description: 'NIK not found',
  })
  @ApiAcceptedResponse({
    description: 'Ktp updated',
    type: KtpCreateOutput,
  })
  @HttpCode(HttpStatus.ACCEPTED)
  async update(
    @Param('nik') nik: string,
    @Body() updateKtpDto: KtpUpdateInput,
  ): Promise<ResponseWithData<KtpCreateOutput>> {
    return {
      statusCode: HttpStatus.CREATED,
      data: await this.ktpService.update(nik, updateKtpDto),
    }
  }

  @Delete(':nik')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('nik') nik: string) {
    return this.ktpService.remove(nik)
  }
}
