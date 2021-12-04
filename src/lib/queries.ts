import { gql } from '@apollo/client';

export const pool = gql`
  query MyQuery($id: ID!) {
    pool(id: $id) {
      name
    }
  }
`;

export const pools = (slug: string) => gql`
query {
  pool(id: "${slug}") {
    _id
    name
    description
    location
    specs{
      width
      length
      depth
      capacity
    }
    sensorDataHistory {
      date
      ph
    }
  }
}`;
