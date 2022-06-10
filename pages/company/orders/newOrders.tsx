import { useQuery } from '@apollo/client';
import Loading from '../../../components/Loading';
import { ALL_CUSTOMERS_ORDERS } from '../../../graphql/company/query/allCustomersOrders';
import NewOrdersRow from '../../../components/company/orders/NewOrdersRow';
import TransitionTitle from '../../../components/transitions/TransitionTitle';
import { useEffect, useState } from 'react';
import TransitionPR from '../../../components/transitions/TransitionPR';
import { clientCompany } from '../../../lib/apolloClient';
import FScreenRow from '../../../components/tailwindComponents/FScreen/FScreenRow';
import Layout from '../../../components/Layout/Layout';

export default function CustomerOrders({ setCurrentUrl }) {
  const { data, loading, error } = useQuery(ALL_CUSTOMERS_ORDERS, {
    client: clientCompany,
  });
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const [ifOpen, setIfOpen] = useState(false);

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  const customersOrders = data.allCustomersOrders.data;

  const newOrders = customersOrders.filter((data) => data.completed === false);

  console.log(newOrders.length);
  return (
    <Layout>
      <TransitionTitle>
        <h1 className='pt-16 text-center text-4xl font-medium text-white '>
          New Orders
        </h1>
      </TransitionTitle>
      <FScreenRow className='max-w-screen flex w-full flex-row justify-center '>
        <TransitionPR>
          <div className='flex  w-screen flex-row sm:justify-center'>
            <div className='flex  overflow-x-scroll pt-10 md:overflow-auto '>
              <table className='w-full divide-y divide-gray-300 overflow-hidden whitespace-nowrap rounded-lg bg-white lg:mr-4 lg:max-w-4xl'>
                <thead className='bg-gray-50'>
                  <tr className='text-center text-gray-800'>
                    <th className='tableHeader'>Name/Email</th>
                    <th className='tableHeader'>Date/Time</th>

                    <th className='tableHeader'>Total Amount</th>

                    <th className='tableHeader'>Address</th>
                    <th className='tableHeader'>Post Code</th>

                    <th className='px-10 py-4 text-center text-sm font-semibold uppercase'>
                      Order
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {newOrders.map((data) => (
                    <NewOrdersRow customerData={data} setIfOpen={setIfOpen} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TransitionPR>
      </FScreenRow>
    </Layout>
  );
}
