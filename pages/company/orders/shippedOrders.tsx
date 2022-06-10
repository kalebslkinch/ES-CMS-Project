import { useQuery } from '@apollo/client';
import Loading from '../../../components/Loading';
import { ALL_CUSTOMERS_ORDERS } from '../../../graphql/company/query/allCustomersOrders';
import ShippedOrdersRow from '../../../components/company/shipped/ShippedOrdersRow';
import TransitionPR from '../../../components/transitions/TransitionPR';
import TransitionTitle from '../../../components/transitions/TransitionTitle';
import { useEffect, useState } from 'react';
import { clientCompany } from '../../../lib/apolloClient';
import Layout from '../../../components/Layout/Layout';
import FScreenRow from '../../../components/tailwindComponents/FScreen/FScreenRow';

export default function CustomerOrders({ setCurrentUrl }) {
  const [ifOpen, setIfOpen] = useState(false);
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);
  const { data, loading, error } = useQuery(ALL_CUSTOMERS_ORDERS, {
    client: clientCompany,
  });

  if (loading) return <Loading />;
  if (error) return <h1>Error</h1>;

  const customersOrders = data.allCustomersOrders.data;

  const newOrders = customersOrders.filter((data) => data.completed === true);

  console.log(newOrders);
  return (
    <Layout>
      <TransitionTitle>
        <div className='pt-16 text-center text-4xl text-white'>
          Shipped Orders
        </div>
      </TransitionTitle>
      <FScreenRow className='max-w-screen  flex w-full  flex-row justify-center '>
        <TransitionPR>
          <div className=' flex flex-row justify-center '>
            <div className='flex  overflow-x-scroll pt-10 sm:overflow-auto  '>
              {' '}
              <table className='w-full  max-w-max divide-y divide-gray-300 overflow-hidden whitespace-nowrap rounded-lg bg-white xl:mr-4 xl:max-w-4xl'>
                <thead className='bg-gray-50'>
                  <tr className='text-center text-gray-800'>
                    <th className='px-6 py-4 text-sm font-semibold uppercase'>
                      Name/Email
                    </th>
                    <th className='px-6 py-4  text-sm font-semibold uppercase'>
                      Date/Time
                    </th>

                    <th className='px-6 py-4 text-center text-sm font-semibold uppercase'>
                      Total Amount
                    </th>

                    <th className='px-6 py-4 text-sm font-semibold uppercase'>
                      Address/Postcode
                    </th>
                    <th className='px-6 py-4 text-sm font-semibold uppercase'>
                      Tracking
                    </th>

                    <th className='px-6 py-4 text-center text-sm font-semibold uppercase'>
                      Order
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {newOrders.map((data) => (
                    <ShippedOrdersRow
                      customerData={data}
                      setIfOpen={setIfOpen}
                    />
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
