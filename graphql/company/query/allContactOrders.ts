import { gql } from "@apollo/client";

export const ALL_CONTACT_ORDERS = gql`
  query {
    allContactOrders {
      data {
        name
        email
        budgetAmount
        prefferedDate
        message
        date
      }
    }
  }
`;
