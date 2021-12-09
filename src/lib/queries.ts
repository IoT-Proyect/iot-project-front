import { gql } from '@apollo/client';

export const GET_POOL = gql`
  query Pool($id: ID!) {
    pool(id: $id) {
      _id
      name
      description
      location
      volumen
      sensorDataHistory {
        date
        ph
      }
    }
  }
`;

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

export const CREATE_POOL = gql`
  mutation CreatePool(
    $owner: ID!
    $name: String!
    $description: String
    $location: String
    $volumen: Int!
    $image: String
    $sensorID: String!
  ) {
    createPool(
      input: {
        name: $name
        description: $description
        location: $location
        image: $image
        owner: $owner
        volumen: $volumen
        sensorID: $sensorID
      }
    ) {
      name
      _id
    }
  }
`;
