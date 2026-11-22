import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module.js';
import { ListingsModule } from './listing/listings.module.js';

@Module({
  imports: [
    HealthModule,
    ListingsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
