import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-native';

import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = () => {
  const { id } = useParams();

  const { data, error, loading } = useQuery(GET_REPOSITORY,
    { 
      variables: { id },
      fetchPolicy: 'cache-and-network'
    }
  );

  return {
    dataRepository: data ? data.repository : undefined,
    errorRepository: error,
    loadingRepository: loading,
  };
};

export default useRepository;