import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteModule } from './quote.module';
import { SeederModule } from './infrastructure/seeder/seeder.module';

@Module({
  imports: [QuoteModule, SeederModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
