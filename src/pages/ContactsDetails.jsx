import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiEdit2,
  FiTrash2,
  FiUserPlus,
  FiBookmark,
} from 'react-icons/fi';
import { FaBuilding, FaBullhorn } from 'react-icons/fa';

export default function ContactsDetails() {
  const {
    state: { contact },
  } = useLocation();

  const googleMapsApiKey = process.env.REACT_APP_CONTACT_GOOGLEMAP_API_KEY;

  const createGoogleMapsUrl = (geo) => {
    const baseUrl = 'https://www.google.com/maps/embed/v1/view';
    return `${baseUrl}?key=${googleMapsApiKey}&center=${geo.lat},${geo.lng}&zoom=18&maptype=satellite`;
  };

  return (
    <div className='p-4 sm:ml-64'>
      <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14'>
        <div className='bg-white p-6 shadow rounded-lg'>
          <div className='text-center mb-6'>
            <h2 className='text-3xl font-bold'>{contact.name}</h2>
          </div>

          <div className='flex flex-col md:flex-row space-y-6 md:space-x-6'>
            <div className='flex-1'>
            <FiUserPlus className='text-4xl' /><span className='text-sm'> {contact.name}</span>
              <p className='text-sm'><FiEdit2 className='text-blue-500 text-xl mr-2' /> {contact.username}</p>
              <p className='text-sm'><FiMail className='text-blue-500 text-xl mr-2' /> {contact.email}</p>
              <p className='text-sm'><FiPhone className='text-blue-500 text-xl mr-2' /> {contact.phone}</p>
            </div>

            <div className='flex-1'>
              <p className='text-sm'><FiPhone className='text-blue-500 text-xl mr-2' /> {contact.phone}</p>
              <p className='text-sm'>
                <FiBookmark className='text-blue-500 text-xl mr-2' />
                <a href={`http://${contact.website}`} target="_blank" rel="noopener noreferrer">{contact.website}</a>
              </p>
              <p className='text-sm flex items-center'><FaBuilding className='text-blue-500 text-xl mr-2' /> {contact.company.name}</p>
              <p className='text-sm flex items-center'><FaBullhorn className='text-blue-500 text-xl mr-2' /> {contact.company.catchPhrase}</p>
              <p className='text-sm'><strong>Business:</strong> {contact.company.bs}</p>
              <p className='text-sm'><FiMapPin className='text-blue-500 text-xl mr-2' /> {`${contact.address.street}, ${contact.address.suite}, ${contact.address.city}, ${contact.address.zipcode}`}</p>
            </div>
          </div>

          {contact.address.geo && (
            <div className='mt-6 flex justify-center'>
              <div className='w-full max-w-xs'>
                <iframe
                  className='w-full aspect-square'
                  loading='lazy'
                  allowFullScreen
                  referrerPolicy='no-referrer-when-downgrade'
                  src={createGoogleMapsUrl(contact.address.geo)}
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
