import { useState } from 'react';
import Check from '../../svg/Check';
import Copy from '../../svg/Copy';
import More from '../../svg/More';
import Tick from '../../svg/Tick';
import FlexCol from '../../tailwindComponents/Flex/FlexCol';
import FScreenRow from '../../tailwindComponents/FScreen/FScreenRow';

interface CUMessagesProps {
  name: string;
  email: string;
  message: string;
  date: string;
  prefferedDate?: string;
  budgetAmount?: string;
}

export default function COMessages({
  name,
  email,
  message,
  date,
  prefferedDate = '',
  budgetAmount = '',
}) {
  const [copied, setCopied] = useState(false);

  // moreInfo state
  const [moreInfo, setMoreInfo] = useState(false);

  const handleClick = () => {
    setMoreInfo(!moreInfo);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className='mx-auto flex  w-full justify-center '>
      <div className='h-full w-full max-w-sm rounded-lg bg-white py-4 px-8 shadow-lg'>
        <button
          onClick={handleClick}
          className='ml-auto mr-2 mt-2 flex translate-x-5 transform'
          data-bs-toggle='tooltip'
          data-bs-placement='bottom'
          title='More Information'
        >
          <More className='h-8 w-8 text-black' />
        </button>

        <div>
          {/* Contact Order Name */}
          <h2 className='text-3xl font-semibold text-gray-800'>{name}</h2>

          {/* Contact Order Message */}
          <p className='mt-2 text-lg text-gray-900'>{message}</p>
        </div>

        {moreInfo && (
          <>
            {/* More Information Wrapper */}
            <FlexCol className='mt-4 mb-2 text-black'>
              {/* More Information Title */}
              <span className='text-xl font-medium'>More Information</span>

              {/* Order Date */}
              <span>Order Date: {date}</span>

              {/* Budget Amount */}
              {budgetAmount !== '' && (
                <span>Budget Amount: {budgetAmount}</span>
              )}

              {/* Preffered Date */}
              {prefferedDate !== '' && (
                <span>Preffered Date: {prefferedDate}</span>
              )}
            </FlexCol>
          </>
        )}

        <FScreenRow className='group mt-2 mb-2 space-x-2'>
          <button
            onClick={copyToClipboard}
            className='ml-auto  mr-1 flex text-indigo-900'
          >
            <span className='text-xl font-medium '>{email}</span>
          </button>

          {!copied && (
            <Copy className='h-6 w-6 text-white group-hover:text-black' />
          )}
          {copied && <Tick className='h-6 w-6 text-green-600' />}
        </FScreenRow>
      </div>
    </div>
  );
}
