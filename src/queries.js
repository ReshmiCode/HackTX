import { gql } from "@apollo/client";

export const ITEMS_QUERY = gql`
  {
    items {
      description
      id
      image
      price
      title
    }
  }
`;
