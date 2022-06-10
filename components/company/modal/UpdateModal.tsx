import FlexRow from '../../tailwindComponents/Flex/FlexRow';

const DeleteModal = ({
  title,
  description,
  bname,
  setOpen,
  updateFunction,
  id,
  data,
}) => {
  const updateContent = () => {
    updateFunction({ variables: { id }, data });
    setOpen(false);
    window.location.reload();
  };

  return (
    <div className='max-w-screen fixed left-0 bottom-0 flex h-full w-full items-center justify-center border border-white bg-gray-800 xl:pl-24'>
      <div className='w-full max-w-xs rounded-lg bg-white sm:max-w-md'>
        <div className='flex flex-col items-start p-4'>
          <div className='flex w-full flex-row items-center'>
            <div className='w-4/5 py-1 text-xl font-medium text-gray-900'>
              {title}
            </div>
            <div className='flex w-1/5   justify-end'>
              <button
                onClick={() => setOpen(false)}
                className='p-0 focus:outline-none '
              >
                <svg
                  className='ml-auto h-6 w-6 cursor-pointer fill-current text-gray-700'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 18 18'
                >
                  <path d='M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z' />
                </svg>
              </button>
            </div>
          </div>
          <hr />
          <div className='pt-1 pb-3 pl-1 text-lg  text-black'>
            {description}
          </div>
          <hr />
          <FlexRow className='ml-auto space-x-2'>
            <button
              onClick={updateContent}
              className='rounded bg-gray-800 py-2 px-4 font-bold capitalize text-white hover:bg-blue-600'
            >
              {bname}
            </button>

            <button
              onClick={() => setOpen(false)}
              className='rounded bg-gray-800 py-2 px-4 font-bold capitalize text-white hover:bg-red-700'
            >
              Cancel
            </button>
          </FlexRow>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
