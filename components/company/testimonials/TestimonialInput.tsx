const TestimonialInput = ({
  title,
  type,
  setInstaData,
  instaData,
  input = true
}) => {
  return (
    <div className="flex flex-row justify-between">
      <label className="text-white text-3xl font-medium ">{title}</label>

      {input ? (
        <input
          required
          placeholder={title}
          className="h-8 bg-gray-700 font-semibold focus:-gray-300 w-48 pl-2"
          onChange={(e) =>
            setInstaData({ ...instaData, [type]: e.target.value })
          }
        />
      ) : (
        <textarea
          className=" bg-gray-700 font-semibold focus:-gray-300 w-40 md:w-64 h-20 py-2 px-2"
          placeholder={title}
          minLength={3}
          maxLength={80}
          onChange={(e) =>
            setInstaData({
              ...instaData,
              [type]: e.target.value
            })
          }
        />
      )}
    </div>
  );
};
export default TestimonialInput;
