import { gql } from '@apollo/client';

import { REPOSITORY_FIELDS, USER_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...repositoryFields
        }
      }
    }
  }

  ${REPOSITORY_FIELDS}
`;

export const ME = gql`
  query {
    me {
      ...userFields
    }
  }

  ${USER_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query repository($id: ID!) {
    repository(id: $id) {
      ...repositoryFields
    }
  }

  ${REPOSITORY_FIELDS}
`;