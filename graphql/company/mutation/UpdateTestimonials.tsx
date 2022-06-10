import { gql } from "@apollo/client";

export const UPDATE_INSTAGRAM = gql`
  mutation updateInstagram($id: ID!, $data: InstagramInput!) {
    updateInstagram(id: $id, data: $data) {
      name
      image
      message
    }
  }
`;
