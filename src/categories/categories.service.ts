import { Injectable, NotFoundException } from '@nestjs/common';
import type { Category } from './category.interface.js';

@Injectable()
export class CategoriesService {
    private readonly categories: Category[] = [
        {
            id: '1',
            name: 'Electronics',
            slug: 'electronics',
        },
        {
            id: '2',
            name: 'Clothing',
            slug: 'clothing',
        },
        {
            id: '3',
            name: 'Books',
            slug: 'books',
        },
    ];

    findAll(): Category[] {
        return this.categories;
    }

    findOne(categoryId: string): Category {
        const category = this.categories.find(
            (item) => item.id === categoryId,
        );

        if (!category) {
            throw new NotFoundException(
                `Category with ID ${categoryId} not found`,
            );
        }

        return category;
    }
}