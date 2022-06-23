import type { GetStaticPaths, GetStaticProps, NextPageWithLayout } from 'next';

import Layout from '@/components/common/Layout';
import Link from '@/components/ui/Link';
import Image from '@/components/ui/Image';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Product, products } from '@/lib/data';

type ProductPageProps = {
  product: Product;
};

const ProductPage: NextPageWithLayout<ProductPageProps> = ({ product }) => {
  return (
    <main className="py-16 container flex-grow">
      <div className="pb-2">
        <Link href="/">Back to products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            className="aspect-square w-full h-auto"
          />
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-2xl">{product.name}</h1>
            </li>
            <li>
              <h2>{product.brand}</h2>
            </li>
            <li>
              <h3>
                {product.rating} of {product.numReviews} reviews
              </h3>
            </li>
            <li>
              <p>{product.description}</p>
            </li>
          </ul>
        </div>
        <div>
          <Card className="p-5">
            <div className="mb-2 flex justify-between items-center">
              <h3 className="text-lg">Price</h3>
              <p>${product.price}</p>
            </div>
            <div className="mb-2 flex justify-between items-center">
              <h3 className="text-lg">Status</h3>
              <p>{product.stock > 0 ? 'In Stock' : 'Unavailable'}</p>
            </div>
            <Button type="button" className="w-full">
              Add to cart
            </Button>
          </Card>
        </div>
      </div>
    </main>
  );
};

ProductPage.getLayout = (page) => {
  const product = page.props.product as Product;

  return <Layout title={product.name}>{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;

  const product = products.find((p) => p.slug === slug);
  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: { product },
  };
};

export default ProductPage;
