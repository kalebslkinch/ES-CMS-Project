import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import InventoryCard from '../../../components/company/inventory/InventoryCard';
import Layout from '../../../components/Layout/Layout';
import Loading from '../../../components/Loading';
import FlexRow from '../../../components/tailwindComponents/Flex/FlexRow';
import TransitionShiftIn from '../../../components/transitions/TransitionShiftIn';
import { ALL_PRODUCTS_AVAILABLE } from '../../../graphql/company/query/allProductsAvailable';
import { clientCompany } from '../../../lib/apolloClient';
const CurrentInventory = ({ setCurrentUrl }) => {
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const { data, loading, error } = useQuery(ALL_PRODUCTS_AVAILABLE, {
    client: clientCompany,
  });

  if (loading) return <Loading />;
  if (error) {
    alert(error.message);
    return <></>;
  }

  const allProductsAvailable = data.allProductsAvailable.data;
  return (
    <Layout>
      <FlexRow className=' flex h-screen w-full max-w-5xl  flex-col overflow-scroll pb-8'>
        <TransitionShiftIn>
          <h2 className='mx-auto mt-12 cursor-default pb-8 text-center text-4xl font-medium capitalize text-white'>
            Current Inventory{' '}
          </h2>
        </TransitionShiftIn>

        <div className='flex flex-wrap justify-center pt-6  '>
          {allProductsAvailable.map((data) => (
            <InventoryCard
              quantity={data.quantity}
              image={data.image}
              description={data.description}
              price={data.price}
              title={data.title}
              id={data._id}
            />
          ))}
        </div>
      </FlexRow>
    </Layout>
  );
};

export default CurrentInventory;
