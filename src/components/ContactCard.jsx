import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ContactCard({ contact }) {
  // const { name, username, email, address, phone, website, company } = contact;
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`contacts/${contact.id}`, { state: { contact } })}>
      <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
        <img
          src={`/images/people${contact.id}.webp`} 
          alt={contact.name}
          className="w-12 h-12 rounded-full mr-3"
        />
        <span className='flex-1 ms-3 whitespace-nowrap'>{contact.name}</span>
      </div>
    </li>
  );
}
