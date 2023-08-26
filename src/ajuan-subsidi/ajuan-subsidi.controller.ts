import { Controller } from '@nestjs/common'
import { AjuanSubsidiService } from './ajuan-subsidi.service'

@Controller('ajuan-subsidi')
export class AjuanSubsidiController {
  constructor(private readonly ajuanSubsidiService: AjuanSubsidiService) {}
}
