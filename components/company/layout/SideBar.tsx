import { useContext, useState } from 'react';

import Cross from '../../svg/Cross';
import User from '../../svg/User';
import Us from '../../svg/Us';
import TransitionOpacity from '../../transitions/TransitionOpacity';
import SideBarESNButtons from './SideBarSpans';
import SidebarTitle from './SidebarTitle';
import Book from '../../svg/Book';
import List from '../../svg/List';
import Truck from '../../svg/Truck';
import Messages from '../../svg/Messages';
import Testimonial from '../../svg/Testimonial';
import Edit from '../../svg/Edit';
import ContactOrderIcon from '../../svg/ContactOrderIcon';
import { AuthContext } from '../../../context/AuthContext';
import { signout } from '../../../lib/firebase/clientApp';

export default function SideBar({ url, currentUrl, toggleOpen }) {
  const { currentUser } = useContext(AuthContext);
  const [logoutButton, setLogoutButton] = useState(false);
  console.log('Current User:', currentUser);
  return (
    <>
      {currentUser && (
        <div
          className={`z-40 flex min-h-screen flex-auto flex-shrink-0 animate-fadein flex-col bg-gray-50 text-gray-800 antialiased`}
        >
          <div className='fixed top-0 left-0 z-50 flex h-full w-1/4 flex-col bg-gray-900 shadow-lg lg:w-2/12'>
            <div className='flex h-16  items-center border-b border-gray-800'>
              <button className='pl-3 xl:hidden' onClick={toggleOpen}>
                <Cross className='h-10 w-10 text-white' />
              </button>
              <div className='w flex w-full flex-row justify-between pl-3  '>
                <p className='text-md ml-1 cursor-default truncate font-sans font-medium tracking-wide text-gray-100'>
                  {currentUser.displayName}
                </p>
                <div className='badge flex flex-row space-x-2'>
                  <TransitionOpacity>
                    {logoutButton ? (
                      <button
                        onClick={signout}
                        onMouseLeave={() => setLogoutButton(false)}
                        className='ml-auto mr-2 flex  flex-row rounded-full bg-gray-400 px-2 py-0.5 text-sm font-medium tracking-wide text-red-800 '
                      >
                        Logout
                      </button>
                    ) : (
                      <button
                        onMouseEnter={() => setLogoutButton(true)}
                        className='ml-auto mr-2 flex  flex-row rounded-full bg-gray-400 px-2 py-0.5 text-sm font-medium tracking-wide  text-red-800'
                      >
                        <User className='my-auto h-5 w-10 ' />
                      </button>
                    )}
                  </TransitionOpacity>
                </div>
              </div>
            </div>
            <div className='flex-grow overflow-y-auto overflow-x-hidden'>
              <ul className='flex flex-col space-y-2 py-4'>
                {/* Products Section */}
                <SidebarTitle title='Products' borderColor='red-900' />
                {/* Add Product Button */}
                <li>
                  <SideBarESNButtons
                    title='Add Product'
                    link='products/addProducts'
                    currentUrl={currentUrl}
                    url={url}
                  >
                    <Us className='h-10 w-10 text-white ' />
                  </SideBarESNButtons>
                </li>
                {/* Current Inventory Button */}

                <li>
                  <SideBarESNButtons
                    title='Current Inventory'
                    link='products/currentInventory'
                    currentUrl={currentUrl}
                    url={url}
                  >
                    <Book className='h-10 w-10 text-white ' />
                  </SideBarESNButtons>
                </li>
                {/* Customers Section */}

                <SidebarTitle title='Orders' borderColor='red-900' />
                {/* New Orders Button */}

                <li>
                  <SideBarESNButtons
                    title='New Orders'
                    link='orders/newOrders'
                    currentUrl={currentUrl}
                    url={url}
                  >
                    <List className='h-10 w-10 text-white ' />
                  </SideBarESNButtons>
                </li>

                {/* Shipped Orders Button */}

                <li>
                  <SideBarESNButtons
                    title='Shipped Orders'
                    link='orders/shippedOrders'
                    currentUrl={currentUrl}
                    url={url}
                  >
                    <Truck className='h-10 w-10 text-white ' />
                  </SideBarESNButtons>
                </li>

                {/* Contact Order */}
                <li>
                  <SideBarESNButtons
                    title='Contact Orders'
                    link='orders/contactOrders'
                    currentUrl={currentUrl}
                    url={url}
                  >
                    <ContactOrderIcon className='h-10 w-10 text-white ' />
                  </SideBarESNButtons>
                </li>

                {/* Customers Section */}
                <SidebarTitle title='Customers' borderColor='red-900' />

                {/* Contact Us Messages Button */}

                <li>
                  <SideBarESNButtons
                    title='Contact Us Messages'
                    link='customers/contactUsMessages'
                    currentUrl={currentUrl}
                    url={url}
                  >
                    <Messages className='h-10 w-10 text-white ' />
                  </SideBarESNButtons>
                </li>

                {/* Web App Section */}

                <SidebarTitle title='Web App' borderColor='red-900' />
                {/* New Orders Button */}

                <li>
                  <SideBarESNButtons
                    title='Add Testimonials'
                    link='web-app/addInstagram'
                    currentUrl={currentUrl}
                    url={url}
                  >
                    <Testimonial className='h-10 w-10 text-white ' />
                  </SideBarESNButtons>
                </li>
                <li>
                  <SideBarESNButtons
                    title='Edit Testimonials'
                    link='web-app/editTestimonials'
                    currentUrl={currentUrl}
                    url={url}
                  >
                    <Edit className='h-10 w-10 text-white ' />
                  </SideBarESNButtons>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>

    // </ClickAwayListener>
  );
}
