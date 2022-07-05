import { useQuery } from 'urql';
import Error from '../../components/Error';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import Spinner from '../../components/Spinner';

import { COLLECTION_QUERY } from '../../lib/query';

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
];

const Collection = () => {
  const [result] = useQuery({ query: COLLECTION_QUERY });
  const { fetching, error, data } = result;

  if (fetching) return <Spinner />;
  if (error) return <Error message={error.message} />;
  console.log(data);

  return (
    <div className='bg-white'>
      <Navbar />
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
          Customers also purchased
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
