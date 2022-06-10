import { gql } from "@apollo/client";

export const DELETE_PRODUCTS_AVAILABLE = gql`
  mutation($id: ID!) {
    deleteProductsAvailable(id: $id) {
      _id
      quantity
      image
      description
      price
      title
    }
  }
`;
