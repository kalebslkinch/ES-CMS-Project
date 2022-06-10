const urlLinks = {
  company: {
    webApp: 'https://exoticsnaxx-kalebslkinch.vercel.app/',
    facebook: '/',
    twitter: '/',
    instagram: '/',
    linkedIn: '/',
    vercel: '/',
    cloudify: 'https://cloudinary.com/console/',
    mapsGoogle: 'https://www.google.co.uk/maps',
  },
};

export const cloudinaryInfo = {
  start: 'https://res.cloudinary.com/',
};

export const handleUrlError = (data, mainPostImage = false) => {
  return mainPostImage
    ? data.mainPostImage.includes(cloudinaryInfo.start) &&
        data.image.includes(cloudinaryInfo.start)
    : data.image.includes(cloudinaryInfo.start);
};
export default urlLinks;
