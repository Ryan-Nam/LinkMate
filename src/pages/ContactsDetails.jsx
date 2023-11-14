import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiUserPlus,
  FiBookmark,
} from 'react-icons/fi';
import { FaBuilding } from 'react-icons/fa';

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
    <div className="p-4 sm:ml-64">
      {/* Border */}
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">{contact.name}</h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 gap-6">
          {/* Personal Info */}
          <div className="bg-gray-50 p-4 rounded dark:bg-gray-800">
            <div className="text-lg mb-4 font-semibold">Personal Info</div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center text-sm">
                <FiUserPlus className="text-xl mr-2" />
                <span>{`${contact.name} (${contact.username})`}</span>
              </div>

              <div className="flex items-center text-sm">
                <FiMail className="text-xl mr-2" />
                <span>{contact.email}</span>
              </div>

              <div className="flex items-center text-sm">
                <FiPhone className="text-xl mr-2" />
                <span>{contact.phone}</span>
              </div>

              <div className="flex items-center text-sm">
                <FiBookmark className="text-xl mr-2" />
                <span>{contact.website}</span>
                <a
                  href={`http://${contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-blue-600 hover:underline"
                >
                  Link
                </a>
              </div>
            </div>
          </div>

          {/* Company and Address */}
          <div className="bg-gray-50 p-4 rounded dark:bg-gray-800">
            <div className="text-lg mb-4 font-semibold">Company & Address</div>

            {/* Company Info */}
            <div className="text-sm">
              <div className="flex items-center">
                <FaBuilding className="text-xl mr-2" />
                <span className="font-semibold">Company</span>
              </div>
              <ul className="list-disc list-inside ml-6">
                <li>
                  <span className="font-semibold">Name:</span>{' '}
                  {contact.company.name}
                </li>
                <li>
                  <span className="font-semibold">Catch Phrase:</span>{' '}
                  {contact.company.catchPhrase}
                </li>
                <li>
                  <span className="font-semibold">BS:</span> {contact.company.bs}
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="text-sm mt-4">
              <div className="flex items-center">
                <FiMapPin className="text-xl mr-2" />
                <span>
                  {`${contact.address.suite}, ${contact.address.street}, ${contact.address.city}, ${contact.address.zipcode}`}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        {contact.address.geo && (
          <div className="mt-6 flex justify-center">
            <div className="w-full max-w-xs">
              <iframe
                className="w-full aspect-square"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={createGoogleMapsUrl(contact.address.geo)}
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
