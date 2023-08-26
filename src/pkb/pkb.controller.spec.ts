import { Test, TestingModule } from '@nestjs/testing'
import { PkbController } from './pkb.controller'
import { PkbService } from './pkb.service'

describe('PkbController', () => {
  let controller: PkbController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PkbController],
      providers: [PkbService],
    }).compile()

    controller = module.get<PkbController>(PkbController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
