import { Controller } from '@nestjs/common'
import { StnkService } from './stnk.service'

@Controller('stnk')
export class StnkController {
  constructor(private readonly stnkService: StnkService) {}
}
