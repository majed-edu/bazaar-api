import { Module } from '@nestjs/common';
import { HealthModule } from './health/health.module.js';
import { ListingsModule } from './listing/listings.module.js';
import { CategoriesModule } from './categories/categories.module.js';

@Module({
  imports: [
    HealthModule,
    ListingsModule,
    CategoriesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
