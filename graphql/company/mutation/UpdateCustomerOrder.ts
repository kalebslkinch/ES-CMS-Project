import { gql } from "@apollo/client";

export const UPDATE_CUSTOMERS_ORDERS = gql`
  mutation updateCustomersOrders($id: ID!, $data: CustomersOrdersInput!) {
    updateCustomersOrders(id: $id, data: $data) {
      completed
      shippingInformation
    }
  }
`;
