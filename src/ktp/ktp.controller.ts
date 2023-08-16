import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KtpService } from './ktp.service';
import { KTPCreateInput } from 'src/@generated/prisma-nestjs-graphql/ktp/ktp-create.input';
import { KTPUpdateInput } from 'src/@generated/prisma-nestjs-graphql/ktp/ktp-update.input';

@Controller('ktp')
export class KtpController {
  constructor(private readonly ktpService: KtpService) {}

  @Post()
  create(@Body() createKtpDto: KTPCreateInput) {
    return this.ktpService.create(createKtpDto);
  }

  @Get()
  findAll() {
    return this.ktpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ktpService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKtpDto: KTPUpdateInput) {
    return this.ktpService.update(+id, updateKtpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ktpService.remove(+id);
  }
}
