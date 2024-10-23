import { Module } from '@nestjs/common';
import { QuoteController } from './controllers/quote.controller';
import { QuoteGeneratorService } from './infrastructure/adapters/mock/services/quote-generator.service';

@Module({
  controllers: [QuoteController],
  providers: [QuoteGeneratorService]
})
export class QuoteModule {}