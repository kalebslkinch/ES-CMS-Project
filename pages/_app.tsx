import React, { useState, useEffect } from 'react';
import '../styles/globals.css';
import NavBar from '../components/company/layout/NavBar';
import SideBar from '../components/company/layout/SideBar';
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  const [hostName, setHostName] = useState('');
  const [pathName, setPathName] = useState('');
  useEffect(() => {
    setHostName(window.location.hostname);
    setPathName(window.location.pathname);
  }, []);

  // change back after
  const url =
    hostName === 'localhost' ? `http://localhost:3000` : `https://${hostName}`;

  const [open, setOpen] = useState(false);

  // Logged In

  // Url
  const [currentUrl, setCurrentUrl] = useState('');

  // Trigger Deployment Timer
  const [triggerDeployTime, setTriggerDeployTime] = useState(false);

  // Toggle Open
  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <AuthProvider>
      <div className='h-screen  bg-gray-800 '>
        <div className='flex flex-col overflow-x-hidden overscroll-contain bg-gray-800 '>
          <NavBar
            setOpen={setOpen}
            open={open}
            triggerDeployTime={triggerDeployTime}
            setTriggerDeployTime={setTriggerDeployTime}
          />
          <div className='flex flex-row'>
            <>
              {' '}
              <SideBar
                url={url}
                currentUrl={currentUrl}
                toggleOpen={toggleOpen}
              />
            </>
            <>
              <Component
                {...pageProps}
                setCurrentUrl={setCurrentUrl}
                setTriggerDeployTime={setTriggerDeployTime}
                className='absolute'
              />
            </>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}
export default MyApp;
