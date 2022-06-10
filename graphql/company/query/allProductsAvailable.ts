import { gql } from "@apollo/client";

export const ALL_PRODUCTS_AVAILABLE = gql`
  query {
    allProductsAvailable {
      data {
        _id
        quantity
        image
        description
        price
        title
      }
    }
  }
`;
