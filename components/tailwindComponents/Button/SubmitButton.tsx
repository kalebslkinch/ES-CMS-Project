const SubmitButton = ({ title }) => {
  return (
    <button
      type='submit'
      className='mx-auto mt-2 transform rounded-lg border border-gray-700 bg-gray-800 py-2 px-3 text-xl font-medium text-white transition delay-100 duration-500 hover:border-transparent hover:bg-gray-700 '
    >
      {title}
    </button>
  );
};

export default SubmitButton;
