import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IoPersonSharp } from "react-icons/io5";

export default function ContactCard({ contact }) {
  const { name, username, email, address, phone, website, company } = contact;
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`contacts/${contact.id}`, { state: { contact } })}>
      <span className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
      <IoPersonSharp className='text-2xl text-red-800' />
        <span className='flex-1 ms-3 whitespace-nowrap'>{contact.name}</span>
      </span>
    </li>
  );
}
