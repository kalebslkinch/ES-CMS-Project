import { FC, MouseEventHandler, useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { upload } from '../../lib/firebase/clientApp';
import getDate from '../../utils/constants/date';
import FlexRow from '../tailwindComponents/Flex/FlexRow';
import Upload2 from '../svg/Upload2';
import X from '../svg/X';

interface UploadModalProps {
  open: MouseEventHandler;
}

const UploadModal: FC<UploadModalProps> = ({ open }) => {
  const { currentUser } = useContext(AuthContext);

  const inputRef = useRef(null);

  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState('');
  const [uploadButton, setUploadButton] = useState('Upload');

  // Logic for uploading file

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
      setFileName(e.target.files[0].name);
    }
  };

  // Convert file size to KB
  const fileSize = photo?.size / 1024;

  // Check if file size is less than 4MB
  const isFileSizeValid = fileSize < 9000;

  // Check if file size is valid and file name length is greater than 2
  const isFileValid = isFileSizeValid && fileName.length > 2;

  // handle file name change
  const handleFileNameChange = (e) => {
    setFileName(`${e.target.value}.${getFileType(photo?.name)}`);
  };

  // Get file type
  const getFileType = (fileName) => {
    return fileName.split('.').pop();
  };

  // Remove file type from file name
  const removeFileType = (fileName: string) => {
    return fileName.split('.')[0];
  };

  // Submit Data
  const submitData = () => {
    fetch('/api/post/postImage', {
      method: 'POST',
      body: JSON.stringify({
        url: `https://storage.googleapis.com/kwa4u-6223c.appspot.com/es-cms/images/${fileName}`,
        name: fileName,
        fileSize: fileSize,
        date: getDate(),
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then((res) => console.log(res.json()));
  };

  // Remove file on submit
  const removeFile = () => {
    setPhoto(null);
    setFileName('');
    inputRef.current.value = '';
  };

  const handleUpload = () => {
    if (isFileSizeValid) {
      upload(photo, fileName, setFileName, setLoading);
      submitData();
      removeFile();
      // Set timeout to set upload button to Uploaded
      setUploadButton('Uploaded');
      // Set timeout to set upload button to Upload
      setTimeout(() => {
        setUploadButton('Upload');
      }, 2200);
    } else {
      setError('File size is too big');
    }
  };

  return (
    <>
      <div
        className='absolute top-0 right-0 bottom-0 left-0 z-40 bg-gray-700 py-12 transition duration-150 ease-in-out'
        id='modal'
      >
        <div
          role='alert'
          className='container my-auto ml-[38%] mt-20 w-11/12 max-w-lg md:w-2/3'
        >
          <div className='relative rounded border border-gray-400 bg-white py-8 px-5 shadow-md md:px-10'>
            {/* Top Upload Icon */}
            <div className='mb-3 flex w-full justify-start text-gray-600'>
              <Upload2 className='h-10 w-10' />
            </div>

            {/* Enter Name */}
            <h1 className='font-lg mb-6 font-bold leading-tight tracking-normal text-gray-800'>
              Upload Images
            </h1>
            <label className='text-sm font-bold leading-tight tracking-normal text-gray-800'>
              File Name
            </label>

            {/* File Name Input */}
            <input
              className='mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none'
              id='name'
              placeholder={fileName}
              value={removeFileType(fileName)}
              type='text'
              onChange={handleFileNameChange}
              disabled={fileName.length < 2}
            />

            {/* Add File */}
            <label className='text-sm font-bold leading-tight tracking-normal text-gray-800'>
              Add File
            </label>

            <FlexRow className='mb-8 mt-2'>
              {/* Add File Input */}
              <input
                ref={inputRef}
                type='file'
                accept='.jpg,.png,.jpeg,.webp'
                onChange={handleChange}
                className='file:duration-400 my-auto bg-white text-black file:transform file:cursor-pointer file:rounded file:bg-white file:transition hover:file:bg-gray-800 hover:file:text-white'
              />
            </FlexRow>

            {isFileValid && (
              <span className='text-lg text-gray-800'>
                File is ready to submit
              </span>
            )}

            <div className='mt-8 flex w-full items-center justify-start'>
              <button
                onClick={handleUpload}
                className='rounded bg-indigo-700 px-8 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-offset-2'
              >
                {uploadButton}
              </button>
              <button
                onClick={open}
                className='ml-3 rounded border  bg-gray-100 px-8 py-2 text-sm text-gray-600 transition duration-150 ease-in-out hover:border-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2'
              >
                Cancel
              </button>
            </div>

            {/* Exit Button */}
            <button
              onClick={open}
              disabled={isFileSizeValid}
              className='absolute top-0 right-0 mt-4 mr-5 cursor-pointer rounded text-gray-400 transition duration-150 ease-in-out hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600'
              aria-label='close modal'
              role='button'
            >
              <X className='h-6 w-6' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadModal;
