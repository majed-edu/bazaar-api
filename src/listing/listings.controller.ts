import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
} from '@nestjs/common';

import { ListingsService } from './listings.service.js';
import type {
    CreateListingInput,
    Listing,
    UpdateListingInput,
} from './listing.interface.js';

@Controller('listings')
export class ListingsController {
    constructor(private readonly listingsService: ListingsService) { }

    @Get()
    findAll() {
        return this.listingsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.listingsService.findOne(id);
    }

    @Post()
    create(@Body() createListingInput: CreateListingInput): Listing {
        return this.listingsService.create(createListingInput);
    }

    @Patch(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateListingInput: UpdateListingInput,
    ): Listing {
        return this.listingsService.update(id, updateListingInput);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.listingsService.remove(id);
    }
}