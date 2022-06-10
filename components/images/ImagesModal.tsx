import useSWR from 'swr';
import { FC, MouseEventHandler, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import fetcher from '../../utils/constants/fetcher';
import X from '../svg/X';
import CopyImageButton from './CopyImageButton';
import FlexRow from '../tailwindComponents/Flex/FlexRow';

interface ImagesModalProps {
  open: MouseEventHandler;
}

const ImagesModal: FC<ImagesModalProps> = ({ open }) => {
  const { currentUser } = useContext(AuthContext);

  const { data: images, error } = useSWR('/api/getImages', fetcher);

  if (error) return <div>failed to load</div>;
  if (!images) return <></>;

  return (
    <>
      <div
        className='oveflow-scroll absolute top-0 right-0 bottom-0 left-0 z-50 h-[150vh] bg-gray-700 py-12 transition duration-150 ease-in-out'
        id='modal'
      >
        <div
          role='alert'
          className='container  mx-auto my-auto mt-20 w-9/12 overflow-scroll  '
        >
          <div className='relative rounded border border-gray-400 bg-white py-8 px-5 shadow-md md:px-10'>
            {/* Exit Button */}
            <FlexRow className='justify-end'>
              <button onClick={open}>
                <X className='h-8 w-8' />
              </button>
            </FlexRow>

            <section className='container mx-auto p-6 font-mono'>
              <div className='mb-8 w-full overflow-hidden rounded-lg shadow-lg'>
                <div className='w-full overflow-x-auto'>
                  <table className='w-full'>
                    {/* Table Head */}
                    <thead>
                      <tr className='text-md border-b border-gray-600 bg-gray-100 text-left font-semibold uppercase tracking-wide text-gray-900'>
                        <th className='px-4 py-3'></th>
                        <th className='px-4 py-3'>Name</th>
                        <th className='px-4 py-3'>Url</th>
                        <th className='px-4 py-3'>Size</th>
                      </tr>
                    </thead>

                    {images.map((image) => (
                      // Table body
                      <CopyImageButton image={image} />
                    ))}
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImagesModal;
