import { Test, TestingModule } from '@nestjs/testing'
import { AjuanSubsidiService } from './ajuan-subsidi.service'

describe('AjuanSubsidiService', () => {
  let service: AjuanSubsidiService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AjuanSubsidiService],
    }).compile()

    service = module.get<AjuanSubsidiService>(AjuanSubsidiService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
