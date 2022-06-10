import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import CUMessages from '../../../components/company/messages/CUMessages';
import Loading from '../../../components/Loading';
import TransitionShiftIn from '../../../components/transitions/TransitionShiftIn';
import { clientCompany } from '../../../lib/apolloClient';
import Layout from '../../../components/Layout/Layout';
import FlexCol from '../../../components/tailwindComponents/Flex/FlexCol';
import { ALL_CONTACT_ORDERS } from '../../../graphql/company/query/allContactOrders';
import COMessages from '../../../components/company/orders/COMessages';

export default function contactOrders({ setCurrentUrl }) {
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const { data, loading, error } = useQuery(ALL_CONTACT_ORDERS, {
    client: clientCompany,
  });
  if (loading) return <Loading />;
  if (error) return console.log('Error');

  console.log(data.allContactOrders.data);
  return (
    <Layout>
      <FlexCol className='mx-auto w-3/5 justify-center space-y-4 overscroll-contain pb-8 '>
        <TransitionShiftIn>
          {/* Title */}
          <h2 className='mx-auto mt-12 cursor-default pb-8 text-center text-4xl font-medium capitalize text-white'>
            Contact Orders
          </h2>

          <FlexCol className='space-y-4 overflow-y-hidden pt-4'>
            {data.allContactOrders.data.map((data) => (
              <TransitionShiftIn>
                <COMessages
                  name={data.name}
                  email={data.email}
                  message={data.message}
                  date={data.date}
                  prefferedDate={data?.prefferedDate}
                  budgetAmount={data?.budgetAmount}
                />
              </TransitionShiftIn>
            ))}
          </FlexCol>
        </TransitionShiftIn>
      </FlexCol>
    </Layout>
  );
}
