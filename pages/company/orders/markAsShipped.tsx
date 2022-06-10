import { useMutation } from '@apollo/client';
import { useEffect, useState } from 'react';
import { UPDATE_CUSTOMERS_ORDERS } from '../../../graphql/company/mutation/UpdateCustomerOrder';
import cookie from 'js-cookie';
import { date, time } from '../../../lib/dateandtime';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout/Layout';
import { clientCompany } from '../../../lib/apolloClient';
import { ALL_CUSTOMERS_ORDERS } from '../../../graphql/company/query/allCustomersOrders';

export default function MarkAsShipped({ setCurrentUrl }) {
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const [deliveryTracking, setDeliveryTracking] = useState('');
  const [updateOrders, { data }] = useMutation(UPDATE_CUSTOMERS_ORDERS, {
    client: clientCompany,
    refetchQueries: [
      {
        query: ALL_CUSTOMERS_ORDERS, // DocumentNode object parsed with gql
      },
    ],
  });

  const router = useRouter();

  console.log(deliveryTracking);
  const onSubmit = async () => {
    const id = cookie.get('id');
    updateOrders({
      variables: {
        id,
        data: {
          completed: true,
          shippingInformation: JSON.stringify({
            date,
            time,
            deliveryTracking,
          }),
        },
      },
    });

    cookie.remove('id');

    setTimeout(() => router.push('/company/orders/shippedOrders'), 500);
  };

  const handleGoBack = () => {
    cookie.remove('id');
    router.push('/company/orders/newOrders');
  };

  return (
    <Layout>
      {cookie.get('id') !== undefined ? (
        <div className='mt-40 flex w-full justify-center '>
          <div className='max-w-4x flex w-full justify-center'>
            <form>
              <div className='flex flex-row space-x-3 text-white xl:space-x-8'>
                <label className='text-lg sm:text-xl '>Delivery Tracking</label>
                <input
                  className='w-40 bg-gray-600 pl-2 sm:w-48'
                  onChange={(e) => setDeliveryTracking(e.target.value)}
                />
              </div>
              <div className='flex justify-center space-x-4 py-8'>
                <button
                  onClick={handleGoBack}
                  className='rounded-lg border border-white px-1 py-1 text-white hover:border-red-600 hover:text-red-600
               sm:px-3 sm:py-2'
                >
                  Go Back
                </button>
                <button
                  onClick={onSubmit}
                  className='rounded-lg border border-white px-1 py-1 text-white hover:border-green-600 hover:text-green-600
               sm:px-3 sm:py-2'
                >
                  Mark as Shipped
                </button>
              </div>
            </form>{' '}
          </div>
        </div>
      ) : (
        <></>
      )}
    </Layout>
  );
}
