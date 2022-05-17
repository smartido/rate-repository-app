import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          fullName,
          description,
          language,
          forksCount,
          stargazersCount,
          ratingAverage,
          reviewCount,
          ownerAvatarUrl,
        }
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      id,
      username
    }
  }
`;