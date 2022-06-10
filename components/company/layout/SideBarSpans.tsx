import LButton from '../../tailwindComponents/Button/LButton';

export default function SideBarESNButtons({
  link,
  title,
  children,
  currentUrl,
  url,
}) {
  const company = '/company/';
  const newLink = `${url}${company}${link}`;
  const buttonStyle = `tranistion duration-700 delay-300 w-screen cursor-pointer relative flex flex-row items-center h-11  focus:outline-none hover:bg-gray-700 text-md text-white hover:text-gray-300 border-l-4 border-transparent  pr-6`;

  return (
    <LButton link={newLink} className='my-auto'>
      <div className={buttonStyle}>
        <span className='text-semibold my-auto ml-1 inline-flex items-center justify-center space-x-2'>
          {children}
          <p className='my-auto font-semibold'>{title}</p>
        </span>
      </div>
    </LButton>
  );
}
