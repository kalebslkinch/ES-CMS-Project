import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCTS } from '../../../graphql/company/mutation/AddProducts';
import TransitionShiftIn from '../../../components/transitions/TransitionShiftIn';
import { clientCompany } from '../../../lib/apolloClient';
import Layout from '../../../components/Layout/Layout';
import ProductInputs from '../../../components/company/products/ProductInput';
import SubmitButton from '../../../components/tailwindComponents/Button/SubmitButton';
import FScreenRow from '../../../components/tailwindComponents/FScreen/FScreenRow';
import FlexCol from '../../../components/tailwindComponents/Flex/FlexCol';
import { ALL_PRODUCTS_AVAILABLE } from '../../../graphql/company/query/allProductsAvailable';

export default function Index({ setCurrentUrl }) {
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const [addProducts, { data }] = useMutation(ADD_PRODUCTS, {
    client: clientCompany,
    refetchQueries: [{ query: ALL_PRODUCTS_AVAILABLE }],
  });

  const [productData, setProductData] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    quantity: '0',
  });

  const onSubmit = () => {
    addProducts({
      variables: {
        data: { ...productData, quantity: parseInt(productData.quantity, 10) },
      },
    });
  };
  return (
    <Layout>
      <FlexCol className='bg-gray-800rounded-xl mx-auto mt-20 flex w-full max-w-xl flex-col justify-center md:w-3/5'>
        <TransitionShiftIn>
          <h2 className='mx-auto cursor-default text-center text-4xl font-medium capitalize text-white'>
            Add Product
          </h2>
          <form className='mt-6 py-4' onSubmit={onSubmit}>
            <div className='flex flex-col space-y-5'>
              <ProductInputs
                title='Product Name'
                type='title'
                setProductData={setProductData}
                productData={productData}
              />
              <ProductInputs
                title='Description'
                type='description'
                setProductData={setProductData}
                productData={productData}
                input={false}
              />
              <ProductInputs
                title='Image'
                type='image'
                setProductData={setProductData}
                productData={productData}
              />
              <div className='flex flex-row justify-between'>
                <ProductInputs
                  title='Price'
                  type='price'
                  setProductData={setProductData}
                  productData={productData}
                  small={true}
                />
                <ProductInputs
                  title='Quantity'
                  type='quantity'
                  setProductData={setProductData}
                  productData={productData}
                  small={true}
                />
              </div>
            </div>
            <FScreenRow className='mt-8'>
              <SubmitButton title='Add Product' />
            </FScreenRow>
          </form>
        </TransitionShiftIn>
      </FlexCol>
    </Layout>
  );
}
