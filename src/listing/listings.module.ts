import { Module } from '@nestjs/common';
import { ListingsController } from './listings.controller.js';
import { ListingsService } from './listings.service.js';
import { CategoriesModule } from '../categories/categories.module.js';

@Module({
  imports: [CategoriesModule],
  controllers: [ListingsController],
  providers: [ListingsService]
})
export class ListingsModule {}
