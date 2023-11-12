import React from 'react';
// import { Form } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function Contacts() {
  const {
    state: { contact },
  } = useLocation();
  // console.log(state);
  console.log(contact);
  // Replace 'YOUR_API_KEY' with your actual Google Maps API key
  const googleMapsApiKey = process.env.REACT_APP_CONTACT_GOOGLEMAP_API_KEY;

  // Function to create the Google Maps Embed URL using contact's geo data
  const createGoogleMapsUrl = (geo) => {
    const baseUrl = 'https://www.google.com/maps/embed/v1/view';
    return `${baseUrl}?key=${googleMapsApiKey}&center=${geo.lat},${geo.lng}&zoom=18&maptype=satellite`;
  };

  return (
    <article>
      <div id='contact'>
        <div>
          <h2>
            {contact.name} ({contact.username})
          </h2>
          <p>Email: {contact.email}</p>
          <p>
            Address: {contact.address.street}, {contact.address.suite},{' '}
            {contact.address.city}, {contact.address.zipcode}
          </p>
          <p>Phone: {contact.phone}</p>
          <p>
            Website:{' '}
            <a
              href={`http://${contact.website}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {contact.website}
            </a>
          </p>
          <p>Company: {contact.company.name}</p>
          <p>Catchphrase: {contact.company.catchPhrase}</p>
          <p>Business Strategy: {contact.company.bs}</p>

          {contact.address.geo && (
            <div>
              <h4>Location on Map</h4>
              <iframe
                width='600'
                height='450'
                style={{ border: 0 }}
                loading='lazy'
                allowFullScreen
                referrerPolicy='no-referrer-when-downgrade'
                src={createGoogleMapsUrl(contact.address.geo)}
              ></iframe>
            </div>
          )}
          {/* <div>
            <Form action='edit'>
              <button type='submit'>Edit</button>
            </Form>
            <Form
              method='post'
              action='destroy'
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <button type='submit'>Delete</button>
            </Form>
          </div> */}
        </div>
      </div>
    </article>
  );
}
