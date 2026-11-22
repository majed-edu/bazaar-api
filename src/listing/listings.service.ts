import { Injectable, NotFoundException } from '@nestjs/common';
import type {
    CreateListingInput,
    Listing,
    UpdateListingInput,
} from './listing.interface.js';

@Injectable()
export class ListingsService {
    private readonly listings: Listing[] = [];
    private nextId = 1;

    findAll(): Listing[] {
        return this.listings;
    }

    findOne(id: number): Listing {
        const listing = this.listings.find((item) => item.id === id);
        if (!listing) {
            throw new NotFoundException(`Listing with ID ${id} not found`);
        }
        return listing;
    }

    create(createListingInput: CreateListingInput): Listing {
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
        Object.assign(listing, updateListingInput, { id });
        return listing;
    }

    remove(id: number): Listing {
        const index = this.listings.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Listing with ID ${id} not found`);
        }
        return this.listings.splice(index, 1)[0];
    }
}
