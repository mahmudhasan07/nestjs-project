import { Test, TestingModule } from '@nestjs/testing';
import { MahmudController } from './mahmud.controller';

describe('MahmudController', () => {
  let controller: MahmudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MahmudController],
    }).compile();

    controller = module.get<MahmudController>(MahmudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
