import NewInfoRow from './NewInfoRow';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
const OrderInfoRow = ({ productOrderInfo, id }) => {
  const router = useRouter();

  const handleOpen = () => {
    cookie.set('id', id);

    router.push('/company/orders/markAsShipped');
  };

  const orderInfo = JSON.parse(productOrderInfo);

  return (
    <>
      <tr className='animate-fadein text-center text-gray-800'>
        <th className='px-6 py-4 text-center text-2xl font-semibold capitalize text-gray-900'>
          Order Information
        </th>

        <th className='px-6 py-4 text-sm font-semibold uppercase'>Title</th>
        <th className='px-6 py-4 text-sm font-semibold uppercase'>Price</th>

        <th className='px-6 py-4 text-center text-sm font-semibold uppercase'>
          Quantity
        </th>
        <th className='px-6 py-4 text-center text-sm font-semibold uppercase'>
          Total Amount
        </th>
        <th className='px-6 py-4 text-center text-sm font-semibold uppercase'>
          {' '}
          <button
            onClick={handleOpen}
            className={`} 
              rounded-full
            bg-green-600 px-4 py-1 font-semibold text-black focus:outline-none sm:px-2`}
          >
            Mark as shipped
          </button>
        </th>
      </tr>
      {orderInfo.map((data) => (
        <NewInfoRow
          title={data.title}
          price={data.price}
          quantity={data.quantity}
          image={data.image}
        />
      ))}
    </>
  );
};

export default OrderInfoRow;
