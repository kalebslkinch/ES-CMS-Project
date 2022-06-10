export default function NewInfoRow({ title, price, quantity, image }) {
  return (
    <>
      <tr className='animate-fadein text-center text-gray-900'>
        <td className='flex justify-center  px-6 py-4'>
          <img src={image} alt='Row picture' className='h-16 w-16' />
        </td>
        <td className='px-6 py-4'>{title}</td>
        <td className='px-6 py-4 text-center text-gray-900'>£{price}</td>
        <td className='px-6 py-4 text-center text-gray-900'>{quantity}</td>
        <td className='px-6 py-4 text-center text-gray-900'>
          £{(parseFloat(price) * quantity).toFixed(2)}
        </td>
        <td className='px-6 py-4 text-center text-gray-900'></td>
      </tr>
    </>
  );
}
