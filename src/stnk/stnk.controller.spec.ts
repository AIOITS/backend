import { Test, TestingModule } from '@nestjs/testing'
import { StnkController } from './stnk.controller'
import { StnkService } from './stnk.service'

describe('StnkController', () => {
  let controller: StnkController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StnkController],
      providers: [StnkService],
    }).compile()

    controller = module.get<StnkController>(StnkController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
