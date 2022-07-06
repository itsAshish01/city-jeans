import { useQuery } from 'urql';
import Error from '../../components/Error';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import Spinner from '../../components/Spinner';

import { COLLECTION_QUERY } from '../../lib/query';

const Collection = () => {
  const [result] = useQuery({ query: COLLECTION_QUERY });
  const { fetching, error, data } = result;

  if (fetching) return <Spinner />;
  if (error) return <Error message={error.message} />;

  const products = data.collections.data;

  return (
    <div className='bg-white'>
      <Navbar />
      <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-semibold tracking-tight text-gray-900'>
          The City Jeans Collection
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => (
            <ProductCard
              key={product.attributes.slug}
              product={product.attributes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
