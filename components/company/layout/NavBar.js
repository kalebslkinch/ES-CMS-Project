import { useContext, useEffect, useState } from 'react';
import Menu from '../../svg/Menu';
import Refresh from '../../svg/Refresh';
import CloudUpload from '../../svg/CloudUpload';
import FlexRow from '../../tailwindComponents/Flex/FlexRow';
import TransitionOpacity from '../../transitions/TransitionOpacity';
import ActionModal from '../modal/ActionModal';
import Head from 'next/head';
import urlLinks from '../../../utils/constants/urlLinks';
import UploadModal from '../../upload/UploadModal';
import ImagesModal from '../../images/ImagesModal';
import { AuthContext } from '../../../context/AuthContext';
let today = new Date();
export let time = new Date().toLocaleTimeString();
export let date =
  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

// This is a Javascript File to avoid type errors caused below with cloudinary

export default function NavBar({
  setOpen,
  open,
  triggerDeployTime,
  setTriggerDeployTime,
}) {
  const { currentUser } = useContext(AuthContext);

  const [openModal, setOpenModal] = useState(false);
  const [openUpload, setOpenUpload] = useState(false);
  const [openImages, setOpenImages] = useState(false);
  const [width, setWidth] = useState(0);
  const [path, setPath] = useState('');
  const [seconds, setSeconds] = useState(45);

  const deployFinished = () => {
    setSeconds(45);
    setTriggerDeployTime(false);
  };

  const { webApp, vercel, cloudify, mapsGoogle } = urlLinks.company;

  const buttonStyles =
    'transition delay-100 duration-500 cursor-pointer ml hover:bg-gray-600 rounded-lg inline-block text-sm font-medium text-white px-1 md:px-3  my-auto py-2  leading-none';
  useEffect(() => {
    setWidth(window.innerWidth);
    // if(location.pathname
  });

  // Toggle Upload
  const toggleUpload = () => {
    setOpenUpload((prev) => !prev);
  };

  // Toggle Images
  const toggleImages = () => {
    setOpenImages((prev) => !prev);
  };
  // Time
  const [Ctime, setCtime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  if (triggerDeployTime) {
    if (seconds > 0) {
      setTimeout(
        seconds > 1 ? () => setSeconds(seconds - 1) : deployFinished,
        1000
      );
    } else {
      return;
    }
  }
  setInterval(updateTime, 1000);

  return (
    <>
      {currentUser && (
        <div
          className={
            width < 658
              ? 'max-w-screen visible flex w-full flex-row justify-end bg-gray-900'
              : 'max-w-screen visible flex w-full  flex-row bg-gray-900'
          }
        >
          {/*  Menu  */}

          {open ? (
            <>
              <div className='w-4' />
              <div className='w-12  ' />
            </>
          ) : (
            <button
              onClick={() => setOpen(true)}
              className='focus:outline-none'
            >
              <div className='flex h-full w-16 justify-center  xl:hidden'>
                <Menu className='my-auto h-8 w-8 text-white' />
              </div>
            </button>
          )}
          <div
            className={
              width < 1280
                ? 'hidden'
                : 'flex h-16  w-2/6 flex-row  justify-center bg-gray-900 py-3 sm:w-2/6 sm:pl-4 '
            }
          >
            <div
              className={width < 1280 ? 'hidden' : ' flex w-full flex-col  '}
            >
              <div className='my-auto flex h-16 w-full  flex-row '>
                <button
                  onClick={() => setOpen(true)}
                  className='focus:outline-none'
                >
                  <span className='ml-2 font-medium text-white sm:text-sm'>
                    Username
                  </span>
                  <svg
                    className=' pl02 sroke-current h-6   w-6 text-gray-400'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M16 10l-4 4-4-4'
                      stroke='4A5568'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className='max-w-screen flex  h-16   w-full flex-row justify-evenly sm:w-full md:justify-end  xl:justify-center  '>
            <nav className='flex flex-row sm:ml-48 sm:mr-4 sm:space-x-6'>
              <a
                rel='noreferrer'
                target='_blank'
                href={webApp}
                className={buttonStyles}
              >
                Web App
              </a>

              <a
                rel='noreferrer'
                target='_blank'
                href={vercel}
                className={buttonStyles}
              >
                Vercel
              </a>
              <button className={buttonStyles} onClick={toggleImages}>
                Images
              </button>
            </nav>
          </div>
          <FlexRow className='space-x-3'>
            <button
              onClick={toggleUpload}
              className='group my-auto'
              type='submit'
            >
              <CloudUpload className='h-6 w-6 text-white group-hover:animate-bounce' />
            </button>

            {!triggerDeployTime ? (
              <button
                onClick={() => setOpenModal(true)}
                className='my-auto'
                type='submit'
              >
                <Refresh className='h-6 w-6 transform text-white transition delay-100  duration-500 hover:rotate-180   hover:scale-125' />
              </button>
            ) : (
              <h4 className='my-auto text-xl font-medium text-white'>
                {seconds}
              </h4>
            )}
            <div className='px-1' />
          </FlexRow>
          <div
            className={`${
              width < 768 ? 'hidden' : 'visible'
            } my-auto flex cursor-default justify-end text-xl text-white md:w-64 md:pr-6`}
          >
            {Ctime}
          </div>
        </div>
      )}

      {openModal && (
        <TransitionOpacity>
          <ActionModal
            title='Rebuild'
            description='Are you sure you will like to do this'
            bname='Rebuild'
            setOpen={setOpenModal}
          />
        </TransitionOpacity>
      )}

      {openUpload && <UploadModal open={toggleUpload} />}

      {openImages && <ImagesModal open={toggleImages} />}
    </>
  );
}
