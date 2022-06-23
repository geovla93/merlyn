import { FC } from 'react';

import Card from '@/components/ui/Card';
import Link from '@/components/ui/Link';
import Image from '@/components/ui/Image';
import Button from '@/components/ui/Button';
import { Product } from '@/lib/data';
import useCart from '@/hooks/useCart';

type ProductItemProps = {
  product: Product;
};

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (product.stock === 0) {
      return;
    }

    addItem({
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      totalPrice: product.price,
    });
  };

  return (
    <Card>
      <Link href={`/shop/${product.slug}`}>
        <Image
          src={product.image}
          alt={product.name}
          className="rounded shadow overflow-hidden aspect-square w-full h-auto"
        />
      </Link>
      <div className="p-5 flex flex-col items-center justify-center">
        <Link href={`/shop/${product.slug}`}>
          <h2 className="text-lg">{product.name}</h2>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <Button type="button" className="w-full" onClick={handleAddToCart}>
          Add to cart
        </Button>
      </div>
    </Card>
  );
};
export default ProductItem;
