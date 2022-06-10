import { useState } from 'react';
import Check from '../../svg/Check';
import Copy from '../../svg/Copy';
import Tick from '../../svg/Tick';
import FlexCol from '../../tailwindComponents/Flex/FlexCol';
import FlexRow from '../../tailwindComponents/Flex/FlexRow';
import FScreenRow from '../../tailwindComponents/FScreen/FScreenRow';

export default function CUMessages({ name, email, message }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className='mx-auto flex  w-full justify-center '>
      <div className='h-full w-full  max-w-sm rounded-lg bg-white px-8 shadow-lg'>
        <div>
          <h2 className='text-3xl font-semibold text-gray-800'>{name}</h2>
          <p className='text-md mt-2 text-gray-700'>{message}</p>
        </div>

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
