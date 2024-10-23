import { Test, TestingModule } from '@nestjs/testing';
import { CreateQuoteService } from './create-quote.service';

describe('CreateQuoteService', () => {
  let service: CreateQuoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateQuoteService],
    }).compile();

    service = module.get<CreateQuoteService>(CreateQuoteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
