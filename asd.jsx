<div className='p-4 sm:ml-64'>
  {/* 테두리 */}
  <div className='p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14'>

    <div className='text-center mb-6'>
      <h2 className='text-3xl font-bold'>{contact.name}</h2>
    </div>

    <div className='grid grid-cols-2 gap-4'>
      <div className='flex flex-col items-start bg-gray-50 p-4 rounded dark:bg-gray-800'>
        
      <div className='flex items-center text-sm'>
                <FiUserPlus className='text-2xl' />
                <p className='ml-2'>{`${contact.name} (${contact.username})`}</p>
                <p>Username</p>
              </div>
              {/* 
              <div className='flex items-center text-sm'>
                <FiEdit2 className='text-2xl' />
                <span className='ml-2'>{contact.username}</span>
              </div> */}

              <div className='flex items-center text-sm'>
                <FiMail className='text-2xl' />
                <span className='ml-2'>{contact.email}</span>
              </div>

              <div className='flex items-center text-sm'>
                <FiPhone className='text-2xl' />
                <span className='ml-2'>{contact.phone}</span>
              </div>

              <div className='flex items-center text-sm'>
                <FiBookmark className='text-2xl' />
                <span>{contact.website}</span>
                <a
                  href={`http://${contact.website}`}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Link
                </a>
              </div>


      </div>

      <div className='flex flex-col items-start bg-gray-50 p-4 rounded dark:bg-gray-800'>
        
        
        
        
        
        <div className='flex items-center mb-2'>


        <div className='text-sm'>
                <div className='flex items-center'>
                  <FaBuilding className='text-2xl' />
                  <span className='ml-2 font-semibold'>Company</span>
                </div>
                <ul className='list-disc list-inside ml-8'>
                  <li>
                    <span className='font-semibold'>Name:</span>{' '}
                    {contact.company.name}
                  </li>
                  <li>
                    <span className='font-semibold'>Catch Phrase:</span>{' '}
                    {contact.company.catchPhrase}
                  </li>
                  <li>
                    <span className='font-semibold'>BS:</span>{' '}
                    {contact.company.bs}
                  </li>
                </ul>
              </div>
        </div>




        <div className='text-sm'>
        <div className='flex items-center text-sm'>
                <FiMapPin className='text-2xl' />
                <span className='ml-2'>{` ${contact.address.suite}, ${contact.address.street}, ${contact.address.city}, ${contact.address.zipcode}`}</span>
              </div>
        </div>




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
