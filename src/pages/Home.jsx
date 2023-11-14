import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/Navbar';
import ContactCard from '../components/ContactCard';

export default function Home() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const queryFn = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || error.message);
    }
  };

  const { isLoading, error, data } = useQuery({
    queryKey: ['contacts'],
    queryFn,
  });

  if (isLoading) return 'Loading....';

  if (error) return 'An error has occured ' + error.message;

  const isContactSelected = location.pathname.includes('/contacts/');

  return (
    <>
      <Navbar onToggleSidebar={toggleSidebar} />
      <div
        id='sidebar'
        class={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          sidebarVisible ? 'translate-x-0' : '-translate-x-full'
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label='Sidebar'
      >
        <div class='h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800'>
          <ul class='space-y-2 font-medium'>
            {data.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))}
          </ul>
        </div>
      </div>
      <div id='detail'>
        {isContactSelected ? (
          <Outlet />
        ) : (
          <div className='p-4 text-xl flex justify-center items-center h-screen'>
            No Contact Selected
          </div>
        )}
      </div>
    </>
  );
}
