import { Module } from '@nestjs/common';
import { QuotesService } from './quotes/quotes.service';

@Module({
  providers: [QuotesService]
})
export class SeederModule {}
