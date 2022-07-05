import { useQuery } from 'urql';
import Spinner from '../../components/Spinner';

import { COLLECTION_QUERY } from '../../lib/query';

const Collection = () => {
  const [result] = useQuery({ query: COLLECTION_QUERY });
  const { fetching, error, data } = result;

  return <Spinner />;
};

export default Collection;
