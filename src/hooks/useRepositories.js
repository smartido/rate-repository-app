import { useQuery } from '@apollo/client';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (orderDirection, searchKeyword) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES,
    { 
      fetchPolicy: 'cache-and-network',
      variables: orderDirection 
        ? {
          orderDirection: orderDirection,
          searchKeyword: searchKeyword,
        } : {
          searchKeyword: searchKeyword,
        },
    }
  );

  return {
    dataRepositories: data ? data.repositories : undefined,
    errorRepositories: error,
    loadingRepositories: loading,
  };
};

export default useRepositories;