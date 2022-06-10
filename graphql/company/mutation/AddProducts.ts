import { gql } from "@apollo/client";

export const ADD_PRODUCTS = gql`
  mutation ProductsAvailable($data: ProductsAvailableInput!) {
    createProductsAvailable(data: $data) {
      title
      description
      image
      price
      quantity
    }
  }
`;
