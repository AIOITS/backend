import { Test, TestingModule } from '@nestjs/testing'
import { HistoryPengisianController } from './history-pengisian.controller'
import { HistoryPengisianService } from './history-pengisian.service'

describe('HistoryPengisianController', () => {
  let controller: HistoryPengisianController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistoryPengisianController],
      providers: [HistoryPengisianService],
    }).compile()

    controller = module.get<HistoryPengisianController>(
      HistoryPengisianController,
    )
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
