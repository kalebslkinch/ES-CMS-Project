import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { mutate } from 'swr';
import { deleteFile } from '../../lib/firebase/clientApp';
import Copy from '../svg/Copy';
import Delete from '../svg/Delete';
import Edit from '../svg/Edit';
import Tick from '../svg/Tick';
import X from '../svg/X';
import FlexRow from '../tailwindComponents/Flex/FlexRow';

interface CopyImageButtonProps {
  image: any;
}

const CopyImageButton: FC<CopyImageButtonProps> = ({ image }) => {
  const [copied, setCopied] = useState(false);

  const [isChecking, setIsChecking] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const router = useRouter();

  // Replace router
  const replace = () => {
    router.replace(router.asPath);
  };

  // Copy to clipboard
  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // Submit Data
  const deleteImageData = () => {
    fetch('/api/post/deleteImage', {
      method: 'POST',
      body: JSON.stringify({ name: image.name }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => console.log(res.json()));
  };
  // Change isChecking
  const handleClick = () => {
    setIsChecking(!isChecking);
  };

  // Handle delete
  const handleDelete = () => {
    deleteFile(image.name);
    deleteImageData();
    mutate('/api/getData');
    handleClick();
    replace();
  };

  return (
    <tbody className='bg-white'>
      <tr className='text-gray-700 '>
        <td className='w-1/12 border px-4 py-3'>
          <div className='flex items-center text-sm'>
            {/* Image */}
            <a href={image.url} target='_blank'>
              <div className='relative mr-3 h-8 w-8 rounded-full md:block'>
                <Image layout='fill' objectFit='cover' src={image.url} alt='' />
              </div>
            </a>
          </div>
        </td>

        <td className='text-ms w-3/12 border px-4 py-3 font-semibold'>
          <FlexRow className='group'>
            {!isChecking && (
              <>
                {/* File Name */}

                {image.name}

                <button
                  className='ml-auto mr-2'
                  onClick={handleClick}
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                  title='Delete Image from Storage'
                >
                  {/* Delete File Icon */}
                  <Delete className='h-6 w-6 text-red-500/10 group-hover:text-red-500' />
                </button>
              </>
            )}

            {isChecking && (
              <>
                <h2>Are you sure ?</h2>
                <button
                  onClick={handleClick}
                  className='ml-auto mr-2'
                  data-bs-toggle='tooltip'
                  data-bs-placement='bottom'
                  title='Click here to go back and NOT delete the image!'
                >
                  <X className='h-6 w-6 text-red-500/10 group-hover:text-red-500' />
                </button>
              </>
            )}
            {isChecking && (
              <button
                className='mr-2'
                onClick={handleDelete}
                data-bs-toggle='tooltip'
                data-bs-placement='bottom'
                title='Click here to Delete Image'
              >
                <Tick className='h-6 w-6 text-green-500/10 group-hover:text-green-500' />
              </button>
            )}
          </FlexRow>
        </td>

        {/* Image URL */}
        <td className='border px-4 py-3 text-xs'>
          <FlexRow className='group'>
            <button
              className='ml-2'
              onClick={() => copyToClipboard(image.url)}
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              title='Copy URL'
            >
              {/* Image URL */}
              <span className='rounded-sm bg-green-100 px-2 py-1 font-semibold leading-tight text-green-700'>
                {image.url}
              </span>
            </button>

            {/* Copy Image URL Button */}
            <button
              className='ml-2'
              onClick={() => copyToClipboard(image.url)}
              data-bs-toggle='tooltip'
              data-bs-placement='bottom'
              title='Copy URL'
            >
              {/* Copy Icon */}
              {!copied && (
                <Copy className='h-6 w-6 text-white group-hover:text-gray-800' />
              )}

              {/* Tick Icon */}
              {copied && <Tick className='h-6 w-6 text-green-500' />}
            </button>
          </FlexRow>
        </td>

        {/* File Size */}
        <td className='border px-4 py-3 text-sm'>{`${image.fileSize.toFixed(
          2
        )}KB`}</td>
      </tr>
    </tbody>
  );
};

export default CopyImageButton;
