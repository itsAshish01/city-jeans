import { useQuery } from 'urql';
import Error from '../../components/Error';
import Spinner from '../../components/Spinner';

import { COLLECTION_QUERY } from '../../lib/query';

const Collection = () => {
  const [result] = useQuery({ query: COLLECTION_QUERY });
  const { fetching, error, data } = result;

  if (fetching) return <Spinner />;
  if (error) return <Error message={error.message} />;

  return null;
};

export default Collection;
