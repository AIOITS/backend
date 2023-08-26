import { Test, TestingModule } from '@nestjs/testing'
import { StnkService } from './stnk.service'

describe('StnkService', () => {
  let service: StnkService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StnkService],
    }).compile()

    service = module.get<StnkService>(StnkService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
