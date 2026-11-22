// The shape of one listing, as the service stores it.
export interface Listing {
  id: number;
  title: string;
  description: string;
  // Money in whole cents (2500 = 25.00), never a float.
  priceCents: number;
  categoryId: number;
  createdAt: Date;
}

// What a client sends to create a listing:
// every field except the ones the server sets.
export type CreateListingInput = Omit<Listing, 'id' | 'createdAt'>;

// What a client sends to update a listing: the same fields, all optional.
export type UpdateListingInput = Partial<CreateListingInput>;
