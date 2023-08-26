import { Test, TestingModule } from '@nestjs/testing'
import { AjuanSubsidiController } from './ajuan-subsidi.controller'
import { AjuanSubsidiService } from './ajuan-subsidi.service'

describe('AjuanSubsidiController', () => {
  let controller: AjuanSubsidiController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AjuanSubsidiController],
      providers: [AjuanSubsidiService],
    }).compile()

    controller = module.get<AjuanSubsidiController>(AjuanSubsidiController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })
})
