import { gql } from "@apollo/client";

export const UPDATE_PRODUCTS_AVAILABLE = gql`
  mutation updateProductsAvailable($id: ID!, $data: ProductsAvailableInput!) {
    updateProductsAvailable(id: $id, data: $data) {
      _id
      quantity
      image
      description
      price
      title
    }
  }
`;
