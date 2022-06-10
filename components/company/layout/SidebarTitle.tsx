const SidebarTitle = ({ title, borderColor }) => {
  return (
    <li className='px-5'>
      <div className='flex h-10 flex-row items-center'>
        <div className='text-md my-2 flex cursor-default font-sans font-semibold  uppercase text-gray-300'>
          <div className={`border-b border-${borderColor}`}>{title}</div>
        </div>
      </div>
    </li>
  );
};
export default SidebarTitle;
