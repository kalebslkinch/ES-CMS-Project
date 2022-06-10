import React, { useCallback } from 'react';
import { useRouter } from 'next/router';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../lib/firebase/clientApp';

const GoogleSignIn = () => {
  const Router = useRouter();

  const loginHandler = useCallback(async () => {
    const provider = new GoogleAuthProvider();
    // additional scopes can be added as per requirement

    try {
      await signInWithPopup(auth, provider);
      Router.push('/');
    } catch (error) {
      console.log('error');
      alert(error);
    }
  }, [Router]);
  return (
    <button
      className='mx-auto flex cursor-pointer rounded-lg border-2 p-3 shadow-lg transition-all duration-500 hover:bg-gray-600 hover:shadow-2xl'
      onClick={loginHandler}
    >
      <div className='flex items-center'>
        <img
          className='h-8 w-8  '
          src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png'
          alt='google'
          w='200'
          h='200'
        />
        <h3 className='my-auto ml-4  text-lg font-semibold  text-white '>
          Continue with Google
        </h3>
      </div>
    </button>
  );
};

export default GoogleSignIn;
