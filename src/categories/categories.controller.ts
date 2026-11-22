import { Controller, Get, Param } from "@nestjs/common";
import { CategoriesService } from "./categories.service.js";

@Controller('categories')
export class CategoriesController {
  // Controller methods will be defined here
  constructor(private readonly categoriesService: CategoriesService) { }

  @Get()
    findAll() {
        return this.categoriesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.categoriesService.findOne(id);
    }
}
