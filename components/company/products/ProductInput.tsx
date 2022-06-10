const ProductInputs = ({
  title,
  type,
  setProductData,
  productData,
  input = true,
  small = false,
}) => {
  return (
    <div
      className={`flex flex-row ${small ? 'space-x-5' : ''} justify-between`}
    >
      <label className='text-2xl font-medium text-white '>{title}</label>

      {input ? (
        !small ? (
          <input
            required
            placeholder={title}
            className=' -gray-800 focus:-gray-300 h-8 w-40 bg-gray-700 pl-2 font-semibold md:w-64'
            onChange={(e) =>
              setProductData({
                ...productData,
                [type]: e.target.value,
              })
            }
          />
        ) : (
          <input
            required
            placeholder={title}
            className=' -gray-800 focus:-gray-300 h-8 w-32 bg-gray-700 pl-2 font-semibold'
            onChange={(e) =>
              setProductData({ ...productData, [type]: e.target.value })
            }
          />
        )
      ) : (
        <textarea
          className=' -gray-800  focus:-gray-300 h-20 w-40 bg-gray-700 px-2 py-2 font-semibold md:w-64'
          placeholder={title}
          minLength={3}
          maxLength={80}
          onChange={(e) =>
            setProductData({
              ...productData,
              [type]: e.target.value,
            })
          }
        />
      )}
    </div>
  );
};
export default ProductInputs;
