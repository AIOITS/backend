import { Controller } from '@nestjs/common'
import { PkbService } from './pkb.service'

@Controller('pkb')
export class PkbController {
  constructor(private readonly pkbService: PkbService) {}
}
