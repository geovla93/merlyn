import { FC } from 'react';
import { NextPageWithLayout } from 'next';
import { XCircleIcon } from '@heroicons/react/outline';

import Layout from '@/components/common/Layout';
import Link from '@/components/ui/Link';
import List from '@/components/ui/List';
import Image from '@/components/ui/Image';
import useCart from '@/hooks/useCart';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { useRouter } from 'next/router';

const CartPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { cartItems, clearItemFromCart, totalAmount } = useCart();
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main className="container py-16 flex-grow">
      <h1 className="mb-4 text-2xl">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="grid lg:grid-cols-4 lg:gap-5">
          <div className="overflow-x-auto lg:col-span-3">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th className="px-5 text-left">Product</th>
                  <th className="p-5 text-right">Quantity</th>
                  <th className="p-5 text-right">Price</th>
                  <th className="p-5">Action</th>
                </tr>
              </thead>
              <List
                as="tbody"
                data={cartItems}
                keyExtractor={(item) => item.name}
                renderItem={(product) => (
                  <tr className="border-b">
                    <td>
                      <Link
                        href={`/shop/${product.slug}`}
                        className="flex items-center"
                      >
                        <Image
                          src={product.image}
                          alt={product.name}
                          className="aspect-square w-14 h-auto"
                        />
                        &nbsp;
                        {product.name}
                      </Link>
                    </td>
                    <td className="p-5 text-right">{product.quantity}</td>
                    <td className="p-5 text-right">{product.price}</td>
                    <td className="p-5">
                      <span className="flex justify-center">
                        <XCircleIcon
                          className="w-5 h-5 cursor-pointer"
                          onClick={clearItemFromCart.bind(this, product.name)}
                        />
                      </span>
                    </td>
                  </tr>
                )}
              />
            </table>
          </div>
          <Card className="p-3">
            <ul>
              <li>
                <div className="pb-3 text-lg">
                  Subtotal ({totalQuantity}) : {totalAmount.toFixed(2)}
                </div>
              </li>
              <li>
                <Button
                  className="w-full"
                  onClick={() => router.push('/shipping')}
                >
                  Checkout
                </Button>
              </li>
            </ul>
          </Card>
        </div>
      ) : (
        <EmptyCart />
      )}
    </main>
  );
};

const EmptyCart: FC = () => {
  return (
    <div className="flex space-x-4">
      <p>Your cart is empty.</p>
      <Link href="/">Go shopping</Link>
    </div>
  );
};

CartPage.getLayout = (page) => {
  return <Layout title="Shopping Cart">{page}</Layout>;
};

export default CartPage;
