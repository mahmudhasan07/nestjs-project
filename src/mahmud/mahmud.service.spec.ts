import { Test, TestingModule } from '@nestjs/testing';
import { MahmudService } from './mahmud.service';

describe('MahmudService', () => {
  let service: MahmudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MahmudService],
    }).compile();

    service = module.get<MahmudService>(MahmudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
