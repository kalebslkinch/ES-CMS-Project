const getSizes = (imageSize) => {
  const sizeSplit = imageSize.split(" ");
  const width = sizeSplit[0];
  const height = sizeSplit[2];
  return { height, width };
};

export const checkImageSizes = (data) => {
  return (
    data.imageSize.includes(" × ") &&
    /^\d+$/.test(data.imageSize[0]) &&
    /^\d+$/.test(data.imageSize[data.imageSize.length - 1]) &&
    /^\d+$/.test(data.mainPostSize[0]) &&
    /^\d+$/.test(data.mainPostSize[data.mainPostSize.length - 1]) &&
    data.mainPostSize.includes(" × ")
  );
};
export default getSizes;
