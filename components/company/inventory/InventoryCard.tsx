import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { DELETE_PRODUCTS_AVAILABLE } from '../../../graphql/company/mutation/DeleteAvailableProducts';
import { UPDATE_PRODUCTS_AVAILABLE } from '../../../graphql/company/mutation/UpdateProductsAvailable';
import Modal from '../modal/Modal';
import X from '../../svg/X';
import Edit from '../../svg/Edit';
import Image from '../../svg/Image';
import Refresh from '../../svg/Refresh';
import Trash from '../../svg/Trash';
import TransitionInventory from '../../transitions/TransitionInventory';
import { clientCompany } from '../../../lib/apolloClient';
import { ALL_PRODUCTS_AVAILABLE } from '../../../graphql/company/query/allProductsAvailable';

export default function InventoryCard({
  quantity,
  image,
  description,
  price,
  title,
  id,
}) {
  const [updateProductsAvailable, { data }] = useMutation(
    UPDATE_PRODUCTS_AVAILABLE,
    {
      client: clientCompany,
      refetchQueries: [{ query: ALL_PRODUCTS_AVAILABLE }],
    }
  );

  const [deleteAvailableProducts, { data: deleteID }] = useMutation(
    DELETE_PRODUCTS_AVAILABLE,
    {
      client: clientCompany,
      refetchQueries: [{ query: ALL_PRODUCTS_AVAILABLE }],
    }
  );

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const [openImage, setOpenImage] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState({
    quantity: false,
    image: false,
    description: false,
    price: false,
    title: false,
  });
  const [editData, setEditData] = useState({
    quantity,
    image,
    description,
    price,
    title,
  });

  const handleChange = (name) => {
    updateProductsAvailable({
      variables: {
        id,
        data:
          name === 'quantity'
            ? { ...editData, quantity: parseInt(editData.quantity, 10) }
            : editData,
      },
    });
    setType({ ...type, [name]: false });

    refreshData();
  };

  const handleRefresh = () => {
    setType({
      quantity: false,
      image: false,
      description: false,
      price: false,
      title: false,
    });
    refreshData();
  };

  const handleDelete = () => {
    setOpen((prev) => !prev);
  };

  const handleImageOpen = () => {
    setOpenImage((prev) => !prev);
  };
  return (
    <div
      className={
        openImage
          ? 'my-2   flex h-full  w-full max-w-xl animate-fadein flex-row rounded-lg bg-white bg-cover '
          : 'my-2   flex h-52  w-full max-w-xl flex-row justify-center rounded-lg  bg-white bg-cover   '
      }
      style={{ backgroundImage: openImage ? `url(${image})` : 'none' }}
    >
      <div
        className={`flex h-10 w-full justify-end pr-2 ${
          openImage ? '' : 'hidden'
        } `}
      >
        <button onClick={handleImageOpen} className='p-0 focus:outline-none '>
          <X className='mt-4 h-10 w-10 rounded-full bg-gray-700 bg-opacity-80 text-red-600 sm:h-14 sm:w-14' />
        </button>
      </div>
      <img
        className={
          openImage
            ? 'hidden'
            : 'h-full  max-h-64 w-1/4 animate-productCardFadeIn rounded-l-lg object-cover object-center'
        }
        src={image}
        alt='Product'
      />

      <div
        className={
          openImage
            ? 'hidden'
            : 'flex w-3/4 flex-col overflow-hidden text-blue-700 '
        }
      >
        <TransitionInventory>
          {/* <TransitionShiftIn> */}
          {/* Title */}
          <div className='flex flex-row'>
            {!type.title ? (
              <button
                onClick={() => setType({ ...type, title: true })}
                className='ml-4 mt-2 flex w-full justify-start  pl-3  text-2xl  text-blue-800 focus:outline-none'
              >
                {title}
              </button>
            ) : (
              <div className='flex h-12 w-3/4 flex-row space-x-1 py-2 pl-2 '>
                <input
                  required
                  minLength={3}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                  className='w-3/5 border border-blue-800 pl-1 '
                  placeholder={title}
                />
                <button
                  onClick={() => handleChange('title')}
                  className='focus:outline-none'
                >
                  <Edit className='h-5 w-5 text-blue-800 ' />
                </button>
              </div>
            )}
            <div className='flex w-36   justify-end space-x-2 pt-1'>
              <button
                onClick={handleImageOpen}
                className='flex  p-0 focus:outline-none'
              >
                <Image className='h-6 w-6 text-blue-700' />
              </button>
              <button
                className='flex  p-0 focus:outline-none'
                onClick={handleRefresh}
              >
                <Refresh className='h-6 w-6 text-indigo-900  ' />
              </button>
              <button
                className='flex  p-0 focus:outline-none'
                onClick={handleDelete}
              >
                <Trash className='h-6 w-6 text-red-800' />
              </button>
            </div>
          </div>
          {/* Description */}
          {!type.description ? (
            <button
              onClick={() => setType({ ...type, description: true })}
              className='text-md h-24 w-full  max-w-sm overflow-hidden py-1 text-center sm:h-12 '
            >
              {description}
            </button>
          ) : (
            <div className='flex flex-row justify-center space-x-1 py-2 '>
              <textarea
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    description:
                      e.target.value.length < 5 ? description : e.target.value,
                  })
                }
                className='w-48 border border-black '
                placeholder={description}
              />
              <button
                onClick={() => handleChange('description')}
                className='focus:outline-none'
              >
                <Edit className='h-5 w-5 ' />
              </button>
            </div>
          )}
          <div className='flex flex-row justify-evenly py-2'>
            <div className='text-md flex flex-col space-y-1 text-black'>
              <h4>Price</h4>

              <h4>Quantity</h4>
              <h3>Image</h3>
            </div>
            <div className='flex w-64 flex-col  space-y-1 truncate text-center text-gray-900'>
              {!type.price ? (
                <button
                  onClick={() => setType({ ...type, price: true })}
                  className=' text-md text-center '
                >
                  £{parseFloat(price).toFixed(2)}
                </button>
              ) : (
                <div className='flex flex-row  justify-center '>
                  <input
                    required
                    minLength={1}
                    onChange={(e) =>
                      setEditData({ ...editData, price: e.target.value })
                    }
                    className='w-2/5 border border-black pl-1 '
                    placeholder={`£${price}`}
                  />
                  <button
                    onClick={() => handleChange('price')}
                    className='focus:outline-none'
                  >
                    <Edit className='h-5 w-5  ' />
                  </button>
                </div>
              )}
              {!type.quantity ? (
                <button
                  onClick={() => setType({ ...type, quantity: true })}
                  className=' text-md text-center '
                >
                  {quantity}
                </button>
              ) : (
                <div className='flex flex-row  justify-center '>
                  <input
                    type='number'
                    min={1}
                    max={1000}
                    required
                    minLength={1}
                    onChange={(e) =>
                      setEditData({ ...editData, quantity: e.target.value })
                    }
                    className='w-2/5 border border-black pl-1 '
                    placeholder={quantity}
                  />
                  <button
                    onClick={() => handleChange('quantity')}
                    className='focus:outline-none'
                  >
                    <Edit className='h-5 w-5 ' />
                  </button>
                </div>
              )}
              {!type.image ? (
                <button
                  onClick={() => setType({ ...type, image: true })}
                  className=' text-md overflow-hidden text-center '
                >
                  {image}
                </button>
              ) : (
                <div className='flex flex-row  justify-center '>
                  <input
                    required
                    minLength={10}
                    onChange={(e) =>
                      setEditData({ ...editData, image: e.target.value })
                    }
                    className='w-2/5 border border-black pl-1 '
                    placeholder={image}
                  />
                  <button
                    onClick={() => handleChange('image')}
                    className='focus:outline-none'
                  >
                    <Edit className='h-5 w-5 ' />
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* </TransitionShiftIn> */}
        </TransitionInventory>
      </div>

      {open ? (
        <Modal
          setOpen={setOpen}
          id={id}
          deleteData={deleteAvailableProducts}
          title='Delete Product'
          description=' Are you sure that you want to delete this Product?'
        />
      ) : null}
    </div>
  );
}
