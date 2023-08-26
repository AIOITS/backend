import { Controller } from '@nestjs/common'
import { HistoryPengisianService } from './history-pengisian.service'

@Controller('history-pengisian')
export class HistoryPengisianController {
  constructor(
    private readonly historyPengisianService: HistoryPengisianService,
  ) {}
}
