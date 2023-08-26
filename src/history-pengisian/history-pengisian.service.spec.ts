import { Test, TestingModule } from '@nestjs/testing'
import { HistoryPengisianService } from './history-pengisian.service'

describe('HistoryPengisianService', () => {
  let service: HistoryPengisianService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistoryPengisianService],
    }).compile()

    service = module.get<HistoryPengisianService>(HistoryPengisianService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
