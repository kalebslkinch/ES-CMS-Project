import LButton from '../../tailwindComponents/Button/LButton';

export default function SideBarESNButton({ link, title, children }) {
  const company = '/company/';

  return (
    <LButton link={`${company}${link}`} className='my-auto'>
      <div className='relative flex h-11 w-screen cursor-pointer flex-row items-center  border-l-4 border-transparent pr-6 text-gray-500 hover:border-blue-500 hover:bg-gray-700 hover:text-gray-200 focus:outline-none'>
        <span className='text-semibold my-auto ml-4 inline-flex items-center justify-center space-x-2'>
          {children}
          <p className='my-auto font-semibold'>{title}</p>
        </span>
      </div>
    </LButton>
  );
}
