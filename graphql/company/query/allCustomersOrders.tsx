import { gql } from "@apollo/client";

export const ALL_CUSTOMERS_ORDERS = gql`
  query {
    allCustomersOrders {
      data {
        _id
        customerID
        quantity
        shippingInformation
        productOrderInfo
        customerInfo
        paypalInfo
        cost
        date
        completed
        time
      }
    }
  }
`;
