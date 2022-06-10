import { gql } from "@apollo/client";

export const ALL_MESSAGES = gql`
  query {
    allMessages {
      data {
        name
        email
        message
      }
    }
  }
`;
