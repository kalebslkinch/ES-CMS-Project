import { gql } from "@apollo/client";

export const ADD_INSTAGRAM = gql`
  mutation AddInstagram($data: InstagramInput!) {
    createInstagram(data: $data) {
      image
      name
      message
    }
  }
`;
