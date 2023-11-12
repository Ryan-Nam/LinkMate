import React from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';

import { useQuery } from '@tanstack/react-query';
// import { search } from '../api/contact';
import ContactCard from '../components/ContactCard';

export default function Home() {
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

  return (
    <>
      <div id='sidebar'>
        <h1>React Router Contacts</h1>
        <div>
          <form id='search-form' role='search'>
            <input
              id='q'
              aria-label='Search contacts'
              placeholder='Search'
              type='search'
              name='q'
            />
            <div id='search-spinner' aria-hidden hidden={true} />
            <div className='sr-only' aria-live='polite'></div>
          </form>
          <form method='post'>
            <button type='submit'>New</button>
          </form>
        </div>

        <nav>
          <ul>
            {data.map((contact) => (
              <ContactCard key={data.id} contact={contact} />
              // <li key={contact.id}>
              //   <Link to={`contacts/${contact.id}`}>{contact.name}</Link>
              // </li>
            ))}
          </ul>
        </nav>
      </div>
      <div id='detail'>
        <Outlet />
      </div>
    </>
  );
}
