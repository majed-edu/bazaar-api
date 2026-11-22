
import { Injectable, NotFoundException } from '@nestjs/common';
import type {
    CreateListingInput,
    Listing,
    UpdateListingInput,
} from './listing.interface.js';
import { CategoriesService } from '../categories/categories.service.js';

@Injectable()
export class ListingsService {
    private readonly listings: Listing[] = [];
    private nextId = 1;

    constructor(private readonly categoriesService: CategoriesService) { }

    findAll(): Listing[] {
        return this.listings;
    }

    findOne(id: number): Listing {
        const listing = this.listings.find((item) => item.id === id);

        if (!listing) {
            throw new NotFoundException(`Listing with ID ${id} not found`);
        }

        this.categoriesService.findOne(String(listing.categoryId));

        return listing;
    }

    create(createListingInput: CreateListingInput): Listing {
        this.categoriesService.findOne(String(createListingInput.categoryId));

        const listing: Listing = {
            ...createListingInput,
            id: this.nextId++,
            createdAt: new Date(),
        };

        this.listings.push(listing);
        return listing;
    }

    update(id: number, updateListingInput: UpdateListingInput): Listing {
        const listing = this.findOne(id);

        if (updateListingInput.categoryId !== undefined) {
            this.categoriesService.findOne(String(updateListingInput.categoryId));
        }

        Object.assign(listing, updateListingInput, { id });

        return listing;
    }

    remove(id: number): Listing {
        const listing = this.findOne(id);

        const index = this.listings.findIndex((item) => item.id === listing.id);

        return this.listings.splice(index, 1)[0];
    }
}
