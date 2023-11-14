import React from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
// import { search } from '../api/contact';
import ContactCard from '../components/ContactCard';

export default function Home() {
  //   const [searchTerm, setSearchTerm] = useState('');

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

  //   const handleSearchChange = (event) => {
  //     setSearchTerm(event.target.value.toLowerCase());
  //   };

  //   const filteredContacts = data?.filter((contact) =>
  //     contact.name.toLowerCase().includes(searchTerm)
  //   );

  if (isLoading) return 'Loading....';

  if (error) return 'An error has occured ' + error.message;

  return (
    <>
      <div id='sidebar'>
        <aside
          id='logo-sidebar'
          class='fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
          aria-label='Sidebar'
        >
          

          <div class='h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800'>
            <ul class='space-y-2 font-medium'>
              {data.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
                // <li key={contact.id}>
                //   <Link to={`contacts/${contact.id}`}>{contact.name}</Link>
                // </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
}
