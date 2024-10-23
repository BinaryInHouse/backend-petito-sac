import { Controller, Get, Param } from '@nestjs/common';
import { QuoteGeneratorService } from '../infrastructure/adapters/mock/services/quote-generator.service';

@Controller('quotes')
export class QuoteController {
  constructor(private readonly quoteGeneratorService: QuoteGeneratorService) {}

  @Get('generate/:projectCode')
  generateQuote(@Param('projectCode') projectCode: string) {
    return this.quoteGeneratorService.generateQuote(projectCode);
  }
}