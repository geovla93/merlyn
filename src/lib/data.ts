export type Product = {
  name: string;
  slug: string;
  category: string;
  image: string;
  price: number;
  brand: string;
  rating: number;
  numReviews: number;
  stock: number;
  description: string;
  gender: 'male' | 'female';
};

export const products: Product[] = [
  {
    name: 'Product 1',
    slug: 'product-1',
    category: 'T-Shirts',
    image: '/images/shirt1.jpg',
    price: 69.99,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 8,
    stock: 20,
    description: 'A popular t-shirt',
    gender: 'male',
  },
  {
    name: 'Fit Shirt',
    slug: 'fit-shirt',
    category: 'T-Shirts',
    image: '/images/shirt2.jpg',
    price: 79.99,
    brand: 'Adidas',
    rating: 3.2,
    numReviews: 10,
    stock: 20,
    description: 'A popular shirt',
    gender: 'male',
  },
  {
    name: 'Slim Shirt',
    slug: 'slim-shirt',
    category: 'T-Shirts',
    image: '/images/shirt3.jpg',
    price: 89.99,
    brand: 'Raymond',
    rating: 4.5,
    numReviews: 3,
    stock: 20,
    description: 'A popular shirt',
    gender: 'male',
  },
  {
    name: 'Golf Pants',
    slug: 'golf-pants',
    category: 'Pants',
    image: '/images/pants1.jpg',
    price: 89.99,
    brand: 'Oliver',
    rating: 2.9,
    numReviews: 13,
    stock: 20,
    description: 'Smart looking pants',
    gender: 'male',
  },
  {
    name: 'Fit Pants',
    slug: 'fit-pants',
    category: 'Pants',
    image: '/images/pants2.jpg',
    price: 94.99,
    brand: 'Zara',
    rating: 3.5,
    numReviews: 7,
    stock: 20,
    description: 'A popular pants',
    gender: 'male',
  },
  {
    name: 'Classic Pants',
    slug: 'classic-pants',
    category: 'Pants',
    image: '/images/pants3.jpg',
    price: 74.99,
    brand: 'Casely',
    rating: 2.4,
    numReviews: 14,
    stock: 20,
    description: 'A popular pants',
    gender: 'male',
  },
];
