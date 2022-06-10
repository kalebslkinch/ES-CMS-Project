import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import GoogleSignIn from '../components/googleSignIn';
import FlexCol from '../components/tailwindComponents/Flex/FlexCol';
import FScreenCol from '../components/tailwindComponents/FScreen/FScreenCol';
import checkUser from '../lib/checkUser';
const Login = ({ user }) => {
  const router = useRouter();

  useEffect(() => {
    if (user) {
      if (
        JSON.stringify(user) !==
        JSON.stringify({
          id: '',
          email: '',
          token: false,
          name: '',
        })
      ) {
        if (!checkUser(user)) {
          router.replace('/');
        }
        router.replace('/');
        return;
      }
      return;
    }
  }, []);

  return (
    <>
      <FScreenCol className='flex  h-screen animate-fadein justify-center'>
        <FlexCol className='sticky mx-auto h-full  max-h-screen w-full justify-center rounded-b-lg   bg-black   bg-opacity-70 pb-20  shadow-xl sm:mb-28  sm:max-h-96  sm:max-w-sm    sm:rounded-lg'>
          <h1 className='flex animate-movetitle justify-center pb-4 text-5xl font-bold text-white sm:pt-20 sm:pb-10'>
            Login
          </h1>
          <GoogleSignIn />
        </FlexCol>
      </FScreenCol>
    </>
  );
};
export default Login;
