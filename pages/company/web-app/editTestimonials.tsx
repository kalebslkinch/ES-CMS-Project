import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import InstagramCard from '../../../components/company/testimonials/InstagramCard';
import Layout from '../../../components/Layout/Layout';
import Loading from '../../../components/Loading';
import FlexCol from '../../../components/tailwindComponents/Flex/FlexCol';
import TransitionShiftIn from '../../../components/transitions/TransitionShiftIn';
import ALL_INSTAGRAM from '../../../graphql/company/query/allInstagram';
import { clientCompany } from '../../../lib/apolloClient';

export default function EditTestimonials({ setCurrentUrl }) {
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const { data, loading, error } = useQuery(ALL_INSTAGRAM, {
    client: clientCompany,
  });

  if (loading) return <Loading />;
  if (error) {
    alert(error.message);
  }

  const testimonials = data.allInstagramInput.data;
  return (
    <Layout>
      <TransitionShiftIn>
        <FlexCol className='mx-auto w-full max-w-lg space-y-4 overflow-hidden pb-8'>
          <h2 className='mx-auto mt-20 cursor-default pb-8 text-center text-4xl font-medium capitalize text-white'>
            Edit Testimonials
          </h2>

          {testimonials.map((data) => (
            <TransitionShiftIn>
              <InstagramCard
                image={data.image}
                name={data.name}
                message={data.message}
                id={data._id}
              />
            </TransitionShiftIn>
          ))}
        </FlexCol>
      </TransitionShiftIn>
    </Layout>
  );
}
