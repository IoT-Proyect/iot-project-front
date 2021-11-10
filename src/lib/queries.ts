import { gql } from '@apollo/client';

export const pool = gql`
  query MyQuery($id: ID!) {
    pool(id: $id) {
      name
    }
  }
`;
