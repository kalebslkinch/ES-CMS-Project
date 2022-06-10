import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_INSTAGRAM } from '../../../graphql/company/mutation/AddInstagram';
import TransitionShiftIn from '../../../components/transitions/TransitionShiftIn';
import { clientCompany } from '../../../lib/apolloClient';
import Layout from '../../../components/Layout/Layout';
import FlexRow from '../../../components/tailwindComponents/Flex/FlexRow';
import TestimonialInput from '../../../components/company/testimonials/TestimonialInput';
import FScreenRow from '../../../components/tailwindComponents/FScreen/FScreenRow';
import FlexCol from '../../../components/tailwindComponents/Flex/FlexCol';
import SubmitButton from '../../../components/tailwindComponents/Button/SubmitButton';
import ALL_INSTAGRAM from '../../../graphql/company/query/allInstagram';
export default function AddInstagram({ setCurrentUrl }) {
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const [addInstagram, { data }] = useMutation(ADD_INSTAGRAM, {
    client: clientCompany,
    refetchQueries: [{ query: ALL_INSTAGRAM }],
  });
  const [instaData, setInstaData] = useState({
    image: '',
    name: '',
    message: '',
  });

  const onSubmit = () => {
    addInstagram({
      variables: {
        data: instaData,
      },
    });
  };
  return (
    <Layout>
      <TransitionShiftIn>
        <h2 className='mx-auto mt-20 cursor-default text-center text-4xl font-medium capitalize text-white'>
          Instagram Testimonial
        </h2>
        <form className='mt-6 py-4' onSubmit={onSubmit}>
          <FScreenRow className='flex flex-row justify-center space-x-4 overflow-hidden md:space-x-12 '>
            <FlexCol className='b mt-5 w-2/5 space-y-5 '>
              <TestimonialInput
                title='Profile Name'
                type='name'
                setInstaData={setInstaData}
                instaData={instaData}
              />
              <TestimonialInput
                title='Image'
                type='image'
                setInstaData={setInstaData}
                instaData={instaData}
              />
              <TestimonialInput
                title='Message'
                type='message'
                setInstaData={setInstaData}
                instaData={instaData}
                input={false}
              />
            </FlexCol>
          </FScreenRow>

          <FlexRow className='mt-8'>
            <SubmitButton title='Add Testimonial' />
          </FlexRow>
        </form>
      </TransitionShiftIn>
    </Layout>
  );
}
