import CryptoJS from 'crypto-js';
import { useState } from 'react';
import OrderInfoHead from './OrderInfoHead';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';

export default function NewOrdersRow({ customerData, setIfOpen }) {
  const [open, setOpen] = useState(false);
  const openProductInfo = () => {
    setOpen(true);
    setIfOpen(true);
  };

  const closeOpenProductInfo = () => {
    setOpen(false);
    setIfOpen(false);
  };

  const router = useRouter();

  // console.log("Customer Data: ", customerData);
  const { _id, cost, date, paypalInfo, productOrderInfo, time } = customerData;
  // Handle Open
  const handleOpen = () => {
    cookie.set('id', _id);

    router.push('/company/orders/markAsShipped');
  };
  const decrypt = (data) => {
    let decryptedData1 = CryptoJS.AES.decrypt(
      data,
      `${process.env.SECRET_KEY}`
    );
    // Decrypt
    let decryptedData2 = JSON.parse(decryptedData1.toString(CryptoJS.enc.Utf8));
    return decryptedData2;
  };

  const { address, customerEmail, firstName, postCode, surName } =
    decrypt(paypalInfo);

  return (
    <>
      <tr>
        <td className='px-6 py-4 text-center'>
          <div className='flex justify-center '>
            <div>
              <p className='text-gray-900'>
                {firstName} {surName}
              </p>
              <p className='text-sm font-semibold tracking-wide text-gray-500'>
                {customerEmail}
              </p>
            </div>
          </div>
        </td>
        <td className='px-6 py-4 text-center'>
          <p className='text-gray-900'>{date}</p>
          <p className='text-sm font-semibold tracking-wide text-gray-500'>
            {time}
          </p>
        </td>

        <td className='px-6 py-4 text-center text-gray-900'>£{cost}</td>
        <td className='px-6 py-4  text-center text-gray-900'>
          <p className='text-gray-900'>{address}</p>
        </td>
        <td className='px-6 py-4 text-center'>
          <p className='text-gray-900'>{postCode}</p>
        </td>

        <td className='px-10 py-4 text-center'>
          {productOrderInfo === 'snackbox' ? (
            <button
              onClick={handleOpen}
              className={`} 
              rounded-full
            bg-green-500 px-6 py-1 font-semibold text-white focus:outline-none sm:px-2`}
            >
              Mark as shipped
            </button>
          ) : (
            <button
              onClick={!open ? openProductInfo : closeOpenProductInfo}
              className={`focus:outline-none ${
                !open ? 'bg-gray-600' : 'bg-red-600'
              } rounded-full px-2 py-1 font-semibold`}
            >
              {!open ? 'Open' : 'Close'}
            </button>
          )}
        </td>
      </tr>
      {open ? (
        <OrderInfoHead productOrderInfo={productOrderInfo} id={_id} />
      ) : (
        <></>
      )}
    </>
  );
}
