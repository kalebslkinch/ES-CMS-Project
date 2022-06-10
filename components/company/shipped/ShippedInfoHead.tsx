import NewInfoRow from './NewInfoRow';
export default function OrderInfoRow({ productOrderInfo, id }) {
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
}
