import { gql } from "@apollo/client";

const ALL_INSTAGRAM = gql`
  query {
    allInstagramInput {
      data {
        _id
        name
        image
        message
      }
    }
  }
`;

export default ALL_INSTAGRAM;
