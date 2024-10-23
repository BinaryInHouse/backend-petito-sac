import { Module } from '@nestjs/common';
import { QuoteController } from './quote.controller';
import { CreateQuoteService } from './create-quote/create-quote.service';


@Module({
  controllers: [QuoteController],
  providers: [CreateQuoteService]
})
export class QuoteModule {}
