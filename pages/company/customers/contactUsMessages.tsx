import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import CUMessages from '../../../components/company/messages/CUMessages';
import Loading from '../../../components/Loading';
import TransitionShiftIn from '../../../components/transitions/TransitionShiftIn';
import { ALL_MESSAGES } from '../../../graphql/company/query/allMessages';
import { clientCompany } from '../../../lib/apolloClient';
import Layout from '../../../components/Layout/Layout';
import FlexCol from '../../../components/tailwindComponents/Flex/FlexCol';

export default function ContactUsMessages({ setCurrentUrl }) {
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const { data, loading, error } = useQuery(ALL_MESSAGES, {
    client: clientCompany,
  });
  if (loading) return <Loading />;
  if (error) return console.log('Error');

  console.log(data.allMessages.data);
  return (
    <Layout>
      <FlexCol className='mx-auto w-3/5 justify-center space-y-4 overscroll-contain pb-8 '>
        <TransitionShiftIn>
          <h2 className='mx-auto mt-12 cursor-default pb-8 text-center text-4xl font-medium capitalize text-white'>
            Contact Us Messages{' '}
          </h2>
          <FlexCol className='space-y-4 overflow-y-hidden  pt-4'>
            {data.allMessages.data.map((data) => (
              <TransitionShiftIn>
                <CUMessages
                  name={data.name}
                  email={data.email}
                  message={data.message}
                />
              </TransitionShiftIn>
            ))}
          </FlexCol>
        </TransitionShiftIn>
      </FlexCol>
    </Layout>
  );
}
