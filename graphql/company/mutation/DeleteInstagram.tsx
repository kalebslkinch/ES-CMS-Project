import { gql } from "@apollo/client";

export const DELETE_INSTAGRAM = gql`
  mutation($id: ID!) {
    deleteInstagram(id: $id) {
      _id
      name
      image

      message
    }
  }
`;
