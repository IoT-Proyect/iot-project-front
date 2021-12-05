import { gql } from '@apollo/client';

export const GET_POOL = (id: string) => gql`
query {
  pool(id: "${id}") {
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

export const GET_USER_POOLS = (id: string) => gql`
query {
  user(id: "${id}") {
    pools {
      _id
      name
      description
      location
      image
    }
  }
}`;
