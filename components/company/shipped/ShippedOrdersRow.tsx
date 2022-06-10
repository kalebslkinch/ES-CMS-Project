import CryptoJS from 'crypto-js';
import { useState } from 'react';
import ShippedInfoHead from './ShippedInfoHead';

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

  // console.log("Customer Data: ", customerData);
  const { _id, cost, paypalInfo, productOrderInfo, shippingInformation } =
    customerData;
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

  const { date, time, deliveryTracking } = JSON.parse(shippingInformation);
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
        <td className='px-6 py-4 text-center'>
          <p className='text-gray-900'>{address}</p>
          <p className='text-sm font-semibold tracking-wide text-gray-500'>
            {postCode}
          </p>
        </td>
        <td className='px-6 py-4 text-center'>
          <p className='text-gray-900'>{deliveryTracking}</p>
        </td>

        <td className='px-6 py-4 text-center'>
          {productOrderInfo === 'snackbox' ? null : (
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
        <ShippedInfoHead productOrderInfo={productOrderInfo} id={_id} />
      ) : (
        <></>
      )}
    </>
  );
}
